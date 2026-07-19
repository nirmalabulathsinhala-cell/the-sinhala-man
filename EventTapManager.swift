import Cocoa
import CoreGraphics

/// Manages the low-level CGEventTap to intercept and rewrite keyboard events.
class EventTapManager {
    static let shared = EventTapManager()
    
    enum InputMode {
        case unicode // maps native macOS Sinhala input source to FMAbhaya
        case qwerty  // maps direct QWERTY keystrokes to FMAbhaya
    }
    
    private(set) var isRunning = false
    
    var isEnabled = true {
        didSet {
            clearBuffer()
        }
    }
    
    // The active mode for translating keystrokes (default is QWERTY)
    var mode: InputMode = .qwerty {
        didSet {
            clearBuffer()
        }
    }
    
    // The current input buffer (represents characters typed in the current word)
    private(set) var currentBuffer = ""
    
    private var eventTap: CFMachPort?
    private var runLoopSource: CFRunLoopSource?
    
    // Magic number to identify our own injected events and avoid feedback loops
    private let magicUserData: Int64 = 12345
    
    // Default list of target apps to intercept keystrokes for
    var targetBundleIdentifiers: Set<String> = [
        "com.adobe.illustrator",
        "com.corel.draw",
        "com.adobe.Photoshop",
        "com.adobe.indesign"
    ]
    
    // Option to apply helper to all apps
    var enableGlobally = false
    
    private init() {}
    
    /// Starts the event tap.
    func start() {
        guard !isRunning else { return }
        
        let eventMask = (1 << CGEventType.keyDown.rawValue)
        
        let callback: CGEventTapCallBack = { proxy, type, event, refcon in
            if type == .tapDisabledByTimeout || type == .tapDisabledByUserInput {
                if let refcon = refcon {
                    let manager = Unmanaged<EventTapManager>.fromOpaque(refcon).takeUnretainedValue()
                    manager.reEnableTap()
                }
                return Unmanaged.passRetained(event)
            }
            
            guard let refcon = refcon else {
                return Unmanaged.passRetained(event)
            }
            
            let manager = Unmanaged<EventTapManager>.fromOpaque(refcon).takeUnretainedValue()
            return manager.handleEvent(proxy: proxy, type: type, event: event)
        }
        
        let selfPointer = UnsafeMutableRawPointer(Unmanaged.passUnretained(self).toOpaque())
        
        guard let tap = CGEvent.tapCreate(
            tap: .cghidEventTap,
            place: .headInsertEventTap,
            options: .defaultTap,
            eventsOfInterest: CGEventMask(eventMask),
            callback: callback,
            userInfo: selfPointer
        ) else {
            print("Error: Failed to create CGEventTap. Ensure Accessibility permissions are granted.")
            return
        }
        
        self.eventTap = tap
        self.runLoopSource = CFMachPortCreateRunLoopSource(kCFAllocatorDefault, tap, 0)
        
        if let runLoopSource = self.runLoopSource {
            CFRunLoopAddSource(CFRunLoopGetCurrent(), runLoopSource, .commonModes)
            CGEvent.tapEnable(tap: tap, enable: true)
            isRunning = true
            print("CGEventTap started successfully.")
        }
    }
    
    /// Stops the event tap.
    func stop() {
        guard isRunning else { return }
        
        if let eventTap = eventTap {
            CGEvent.tapEnable(tap: eventTap, enable: false)
        }
        
        if let runLoopSource = runLoopSource {
            CFRunLoopRemoveSource(CFRunLoopGetCurrent(), runLoopSource, .commonModes)
        }
        
        eventTap = nil
        runLoopSource = nil
        isRunning = false
        clearBuffer()
        print("CGEventTap stopped.")
    }
    
    /// Re-enables the event tap if disabled by system timeout.
    private func reEnableTap() {
        guard let eventTap = eventTap else { return }
        CGEvent.tapEnable(tap: eventTap, enable: true)
        print("CGEventTap re-enabled after timeout.")
    }
    
    /// Clears the current buffer.
    func clearBuffer() {
        currentBuffer = ""
    }
    
    /// Checks if we should intercept key events for the currently active app.
    private func shouldIntercept() -> Bool {
        guard isEnabled else { return false }
        if enableGlobally { return true }
        
        guard let frontApp = NSWorkspace.shared.frontmostApplication,
              let bundleID = frontApp.bundleIdentifier else {
            return false
        }
        
        return targetBundleIdentifiers.contains(bundleID)
    }
    
    /// Handles incoming key down events.
    private func handleEvent(proxy: CGEventTapProxy, type: CGEventType, event: CGEvent) -> Unmanaged<CGEvent>? {
        // 1. Avoid infinite loops by ignoring our own injected events
        let userData = event.getIntegerValueField(.eventSourceUserData)
        if userData == magicUserData {
            return Unmanaged.passRetained(event)
        }
        
        // 2. Handle global Enable/Disable shortcut: Control + Option + S (S keycode is 1)
        let keyCode = event.getIntegerValueField(.keyboardEventKeycode)
        let flags = event.flags
        let isControl = flags.contains(CGEventFlags.maskControl)
        let isOption = flags.contains(CGEventFlags.maskAlternate)
        let isCommand = flags.contains(CGEventFlags.maskCommand)
        
        if isControl && isOption && !isCommand && keyCode == 1 {
            EventTapManager.shared.isEnabled.toggle()
            NSSound.beep() // Play system warning sound for auditory feedback
            NotificationCenter.default.post(name: NSNotification.Name("FMHelperToggleEnabled"), object: nil)
            clearBuffer()
            return nil // Swallow event
        }
        
        // 3. Only intercept if the conditions are met
        guard shouldIntercept() else {
            clearBuffer()
            return Unmanaged.passRetained(event)
        }
        
        // 4. Clear buffer on keyboard shortcuts (Cmd, Opt, Ctrl)
        if flags.contains(CGEventFlags.maskCommand) || flags.contains(CGEventFlags.maskAlternate) || flags.contains(CGEventFlags.maskControl) {
            clearBuffer()
            return Unmanaged.passRetained(event)
        }
        
        // 5. Extract characters from the event
        var chars = [UniChar](repeating: 0, count: 4)
        var actualLength = 0
        event.keyboardGetUnicodeString(maxStringLength: 4, actualStringLength: &actualLength, unicodeString: &chars)
        let typedString = String(utf16CodeUnits: chars, count: actualLength)
        
        // 6. Handle physical Backspace key (virtual key code 51)
        if keyCode == 51 {
            if !currentBuffer.isEmpty {
                // Delete one character logically from the buffer
                let newBuffer = String(currentBuffer.dropLast())
                updateBuffer(to: newBuffer)
                return nil // Swallow backspace
            } else {
                return Unmanaged.passRetained(event) // Let physical backspace pass
            }
        }
        
        // 6. Handle whitespace/control key/empty inputs
        guard !typedString.isEmpty else {
            return Unmanaged.passRetained(event)
        }
        
        let firstScalar = typedString.unicodeScalars.first!
        let isControlOrWhitespace = CharacterSet.whitespacesAndNewlines.contains(firstScalar) || CharacterSet.controlCharacters.contains(firstScalar)
        
        if isControlOrWhitespace {
            clearBuffer()
            return Unmanaged.passRetained(event)
        }
        
        // 7. Route based on active mode
        switch mode {
        case .qwerty:
            // Buffer any standard QWERTY alphanumeric character
            let newBuffer = currentBuffer + typedString
            updateBuffer(to: newBuffer)
            return nil // Swallow original keypress
            
        case .unicode:
            // Buffer only Sinhala Unicode character inputs
            if typedString.isSinhalaUnicode {
                let newBuffer = currentBuffer + typedString
                updateBuffer(to: newBuffer)
                return nil // Swallow original keypress
            } else {
                clearBuffer()
                return Unmanaged.passRetained(event)
            }
        }
    }
    
    /// Computes the diff between old and new state, and updates the application text via backspaces & inserts.
    private func updateBuffer(to newBuffer: String) {
        let fmOld: String
        let fmNew: String
        
        switch mode {
        case .qwerty:
            fmOld = FMAbhayaConverter.convertQwertyToFM(currentBuffer)
            fmNew = FMAbhayaConverter.convertQwertyToFM(newBuffer)
        case .unicode:
            fmOld = FMAbhayaConverter.convert(currentBuffer)
            fmNew = FMAbhayaConverter.convert(newBuffer)
        }
        
        let prefixCount = commonPrefixCount(fmOld, fmNew)
        let suffixOldCount = fmOld.count - prefixCount
        let suffixNew = String(fmNew.dropFirst(prefixCount))
        
        if suffixOldCount > 0 {
            sendBackspaces(count: suffixOldCount)
        }
        
        if !suffixNew.isEmpty {
            sendCharacters(suffixNew)
        }
        
        currentBuffer = newBuffer
    }
    
    /// Computes the length of the common prefix of two strings.
    private func commonPrefixCount(_ s1: String, _ s2: String) -> Int {
        var count = 0
        let a1 = Array(s1)
        let a2 = Array(s2)
        let minCount = min(a1.count, a2.count)
        
        while count < minCount && a1[count] == a2[count] {
            count += 1
        }
        return count
    }
    
    /// Sends simulated Backspace events to the active application.
    private func sendBackspaces(count: Int) {
        let source = CGEventSource(stateID: .combinedSessionState)
        source?.userData = magicUserData
        
        for _ in 0..<count {
            if let keyDown = CGEvent(keyboardEventSource: source, virtualKey: 51, keyDown: true),
               let keyUp = CGEvent(keyboardEventSource: source, virtualKey: 51, keyDown: false) {
                
                keyDown.flags = []
                keyUp.flags = []
                
                keyDown.post(tap: .cghidEventTap)
                keyUp.post(tap: .cghidEventTap)
            }
        }
    }
    
    /// Sends a Unicode string as simulated keystrokes to the active application.
    private func sendCharacters(_ string: String) {
        let source = CGEventSource(stateID: .combinedSessionState)
        source?.userData = magicUserData
        
        for char in string {
            let utf16Chars = Array(String(char).utf16)
            
            if let keyDown = CGEvent(keyboardEventSource: source, virtualKey: 0, keyDown: true) {
                keyDown.flags = []
                keyDown.keyboardSetUnicodeString(stringLength: utf16Chars.count, unicodeString: utf16Chars)
                keyDown.post(tap: .cghidEventTap)
            }
            
            if let keyUp = CGEvent(keyboardEventSource: source, virtualKey: 0, keyDown: false) {
                keyUp.flags = []
                keyUp.keyboardSetUnicodeString(stringLength: utf16Chars.count, unicodeString: utf16Chars)
                keyUp.post(tap: .cghidEventTap)
            }
        }
    }
}

// MARK: - Extension

extension String {
    /// Checks if a string contains Sinhala Unicode characters or ZWJ.
    var isSinhalaUnicode: Bool {
        guard let firstChar = self.first else { return false }
        for scalar in firstChar.unicodeScalars {
            let val = scalar.value
            // U+0D80 to U+0DFF is the Sinhala block. U+200D is the Zero Width Joiner (ZWJ)
            if (val >= 0x0D80 && val <= 0x0DFF) || val == 0x200D {
                return true
            }
        }
        return false
    }
}
