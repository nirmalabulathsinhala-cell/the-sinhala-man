import Cocoa

class AppDelegate: NSObject, NSApplicationDelegate {
    var statusItem: NSStatusItem?
    
    func applicationDidFinishLaunching(_ notification: Notification) {
        // 1. Check/Prompt for Accessibility permissions
        checkAccessibilityPermissions()
        
        // 2. Setup the Menu Bar status item
        setupStatusBar()
        
        // 3. Register for global toggle shortcut notifications
        NotificationCenter.default.addObserver(self, selector: #selector(handleToggleNotification), name: NSNotification.Name("FMHelperToggleEnabled"), object: nil)
        
        // 4. Start the event tap
        EventTapManager.shared.start()
    }
    
    func applicationWillTerminate(_ notification: Notification) {
        NotificationCenter.default.removeObserver(self)
        EventTapManager.shared.stop()
    }
    
    /// Checks if accessibility permissions are granted and prompts if they are not.
    private func checkAccessibilityPermissions() {
        let options = [kAXTrustedCheckOptionPrompt.takeUnretainedValue() as String: true] as CFDictionary
        let isTrusted = AXIsProcessTrustedWithOptions(options)
        
        if !isTrusted {
            print("Accessibility permissions not granted. Prompting user...")
            
            // Show a user-friendly alert
            let alert = NSAlert()
            alert.messageText = "Accessibility Permissions Required"
            alert.informativeText = "The Sinhala FM Helper requires Accessibility permissions to intercept and correct keystrokes in design applications like Illustrator and CorelDRAW. Please enable it in System Settings."
            alert.alertStyle = .warning
            alert.addButton(withTitle: "Open System Settings")
            alert.addButton(withTitle: "Later")
            
            let response = alert.runModal()
            if response == .alertFirstButtonReturn {
                if let url = URL(string: "x-apple.systempreferences:com.apple.preference.security?Privacy_Accessibility") {
                    NSWorkspace.shared.open(url)
                }
            }
        }
    }
    
    /// Initializes the menu bar status item.
    private func setupStatusBar() {
        statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)
        
        updateStatusBarTitle()
        
        let menu = NSMenu()
        
        // Title menu item
        let titleItem = NSMenuItem(title: "Sinhala FM Helper", action: nil, keyEquivalent: "")
        titleItem.isEnabled = false
        menu.addItem(titleItem)
        
        menu.addItem(NSMenuItem.separator())
        
        // Toggle Active state
        let toggleItem = NSMenuItem(title: "Enabled", action: #selector(toggleEnabled(_:)), keyEquivalent: "e")
        toggleItem.state = EventTapManager.shared.isEnabled ? .on : .off
        menu.addItem(toggleItem)
        
        // Toggle Global mode
        let globalItem = NSMenuItem(title: "Apply System-wide", action: #selector(toggleGlobal(_:)), keyEquivalent: "g")
        globalItem.state = EventTapManager.shared.enableGlobally ? .on : .off
        menu.addItem(globalItem)
        
        menu.addItem(NSMenuItem.separator())
        
        // Input Mode Selection Submenu
        let modeItem = NSMenuItem(title: "Input Mode", action: nil, keyEquivalent: "")
        let modeSubmenu = NSMenu()
        
        let qwertyMode = NSMenuItem(title: "Direct QWERTY Keyboard", action: #selector(setQwertyMode(_:)), keyEquivalent: "")
        qwertyMode.state = EventTapManager.shared.mode == .qwerty ? .on : .off
        modeSubmenu.addItem(qwertyMode)
        
        let unicodeMode = NSMenuItem(title: "macOS Sinhala Unicode Layout", action: #selector(setUnicodeMode(_:)), keyEquivalent: "")
        unicodeMode.state = EventTapManager.shared.mode == .unicode ? .on : .off
        modeSubmenu.addItem(unicodeMode)
        
        modeItem.submenu = modeSubmenu
        menu.addItem(modeItem)
        
        menu.addItem(NSMenuItem.separator())
        
        // Target Apps list description
        let targetAppsItem = NSMenuItem(title: "Target Design Apps:", action: nil, keyEquivalent: "")
        targetAppsItem.isEnabled = false
        menu.addItem(targetAppsItem)
        
        for appID in EventTapManager.shared.targetBundleIdentifiers.sorted() {
            let appName = appID.components(separatedBy: ".").last?.capitalized ?? appID
            let appItem = NSMenuItem(title: "  • \(appName)", action: nil, keyEquivalent: "")
            appItem.isEnabled = false
            menu.addItem(appItem)
        }
        
        menu.addItem(NSMenuItem.separator())
        
        // Quit
        menu.addItem(NSMenuItem(title: "Quit", action: #selector(quitApp), keyEquivalent: "q"))
        
        statusItem?.menu = menu
    }
    
    /// Updates the text shown in the macOS Menu Bar.
    private func updateStatusBarTitle() {
        if let button = statusItem?.button {
            if EventTapManager.shared.isEnabled {
                button.title = "සිං (FM)"
                button.contentTintColor = NSColor.labelColor
            } else {
                button.title = "සිං (Off)"
                button.contentTintColor = NSColor.secondaryLabelColor
            }
        }
    }
    
    @objc private func toggleEnabled(_ sender: NSMenuItem) {
        EventTapManager.shared.isEnabled.toggle()
        sender.state = EventTapManager.shared.isEnabled ? .on : .off
        updateStatusBarTitle()
    }
    
    @objc private func toggleGlobal(_ sender: NSMenuItem) {
        EventTapManager.shared.enableGlobally.toggle()
        sender.state = EventTapManager.shared.enableGlobally ? .on : .off
    }
    
    @objc private func setQwertyMode(_ sender: NSMenuItem) {
        EventTapManager.shared.mode = .qwerty
        updateMenuStates()
    }
    
    @objc private func setUnicodeMode(_ sender: NSMenuItem) {
        EventTapManager.shared.mode = .unicode
        updateMenuStates()
    }
    
    private func updateMenuStates() {
        guard let menu = statusItem?.menu else { return }
        if let modeItem = menu.items.first(where: { $0.title == "Input Mode" }),
           let submenu = modeItem.submenu {
            submenu.items[0].state = EventTapManager.shared.mode == .qwerty ? .on : .off
            submenu.items[1].state = EventTapManager.shared.mode == .unicode ? .on : .off
        }
    }
    
    @objc private func handleToggleNotification() {
        updateStatusBarTitle()
        if let menu = statusItem?.menu,
           let toggleItem = menu.items.first(where: { $0.title == "Enabled" }) {
            toggleItem.state = EventTapManager.shared.isEnabled ? .on : .off
        }
    }
    
    @objc private func quitApp() {
        NSApplication.shared.terminate(self)
    }
}
