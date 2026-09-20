# nalbe.github.io

Personal GitHub Pages site: https://nalbe.github.io/

Built as a small static page (plain HTML + CSS, no framework) presenting
a selection of projects. Hosted for free on GitHub Pages.

## Projects featured

| Project | Language | What it is |
|---------|----------|------------|
| [DisableMenuAcceleration](https://github.com/nalbe/DisableMenuAcceleration) | C++ | Windows tray tool that stops Alt from grabbing focus into the window menu, so input-language hotkeys (Alt/Shift/Ctrl) always work. |
| [Forest](https://github.com/nalbe/Forest) | C++17 | Header-only intrusive forest container with traversal policies and an STL-like interface. |
| [IPushButton](https://github.com/nalbe/IPushButton) | C++ | Zero-allocation Arduino library for robust button handling: debouncing, push, hold, release, rich event detection. |
| [IKeybind](https://github.com/nalbe/IKeybind) | C++ | Templated Arduino keybind manager built on IPushButton; multi-key combinations and event-driven patterns. |
| [TranslitSelection](https://github.com/nalbe/TranslitSelection) | C++ | Multi-language tray utility that fixes selected text typed in the wrong keyboard layout via a global hotkey. |

### Android / GSI page

A second page ([`android.html`](android.html)) lists the Blackview Shark 8
GSI projects and their supporting tools: Magisk / KernelSU modules and
patches, plus the LED chip driver and notification bridge that power the
LED daemon. Linked from the main page hero and a teaser banner.

| Project | Language | What it is |
|---------|----------|------------|
| [shark8-volte-vowifi-gsi-patch](https://github.com/nalbe/shark8-volte-vowifi-gsi-patch) | Smali | VoLTE + VoWiFi (IMS) framework patch for the Shark 8 (MTK MT6789, phh GSI Android 14, MegaFon). |
| [shark8-led-daemon](https://github.com/nalbe/shark8-led-daemon) | C | Native root daemon (chgd) + optional LED GUI driving the notification / charge LED on the Shark 8 GSI; notifications arrive over noty-bridge, no polling loops. |
| [android-aw2033-driver](https://github.com/nalbe/android-aw2033-driver) | C | Standalone AW2033 RGB LED chip controller: register map + on-chip pattern engine, and the awctl CLI for hand-tuning the LED on-device. Linked by the LED daemon as a static library. |
| [android-notify-bridge](https://github.com/nalbe/android-notify-bridge) | Kotlin | Headless NotificationListenerService routing Android notification events to any consumer over abstract Unix sockets - config-driven rules and sinks, decoupled from the LED daemon. |
| [shark8-stock-camera-gsi-port](https://github.com/nalbe/shark8-stock-camera-gsi-port) | Java | Patched stock camera APK for GSI - restores HDR, Night, Panorama via bundled ArcSoft native libs. |
| [shark8-vulkan-gsi-patch](https://github.com/nalbe/shark8-vulkan-gsi-patch) | Shell | Magisk module forcing HWUI onto the Vulkan backend for the Shark 8 GSI. |
| [shark8-gsi-logspam-cosmetics](https://github.com/nalbe/shark8-gsi-logspam-cosmetics) | Shell | KernelSU module silencing SELinux avc find/getattr logspam and ImsProvisioningController noise. |
| [shark8-adb-wifi-lan-persistent](https://github.com/nalbe/shark8-adb-wifi-lan-persistent) | Shell | KernelSU module keeping ADB alive over Wi-Fi on port 5555, firewalled (iptables) to your LAN subnet only. |
| [shark8-custom-bootlogo](https://github.com/nalbe/shark8-custom-bootlogo) | PowerShell | Custom boot logo (splash) for the Shark 8 - MTK lk logo partition image builder and flasher, flashable zip included. |
| [shark8-audiovol-earpiece-fix](https://github.com/nalbe/shark8-audiovol-earpiece-fix) | XML | Fixes the weak call earpiece on the Shark 8: repairs a broken factory dl_gain curve in SpeechVol_AudioParam.xml and shows how to apply it on KernelSU. |

More repositories: https://github.com/nalbe?tab=repositories

## Local development

The site needs no build step — open `index.html` directly in a browser.
Deployment to GitHub Pages happens automatically from the `main` branch.

## License

[MIT](LICENSE)
