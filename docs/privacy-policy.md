---
title: Privacy Policy
sidebar_position: 4
---

# Privacy Policy & Security Guarantee

**hckr was built on a simple principle: Your data is yours alone.**

## 🛡️ Zero Data Collection

- **No Remote Servers**: The extension communicates with NO backend servers or remote APIs.
- **No Analytics / Telemetry**: We do not include Google Analytics, Sentry, Mixpanel, or any tracking SDKs.
- **Local In-Memory Execution**: Every operation (JSON parsing, JWT decoding, Hash generation, Regex evaluation) executes locally inside your browser sandbox.
- **Offline Capable**: hckr works 100% offline without an active internet connection.

## 🔑 Permissions Justification

| Permission | Reason |
| :--- | :--- |
| `sidePanel` | Used to display the responsive sidepanel UI alongside your web pages. |
| `storage` | Saves your local UI preferences (selected tool, theme, tab states) on your machine. |
| `contextMenus` | Allows right-clicking selected text to send it directly into the relevant tool. |
| `activeTab` | Used only when you trigger selection actions from the context menu on an active page. |
