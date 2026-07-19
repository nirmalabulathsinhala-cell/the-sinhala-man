import Cocoa

// Entrypoint for the AppKit application
let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate

// Run the main event loop
app.run()
