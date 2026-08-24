---
title: Manifest V3 Compliance
sidebar_position: 2
---

# 📜 Manifest V3 Compliance

`hckr` is built natively against Chrome's **Manifest V3** specifications, guaranteeing maximum privacy, security, and performance.

## `public/manifest.json` Reference

```json
{
  "manifest_version": 3,
  "name": "hckr — Dev Toolkit",
  "version": "1.0.0",
  "description": "11 essential developer utilities in your browser. JSON formatter, Base64, UUID, timestamps, JWT decoder & more. Fully offline, privacy-first.",
  "action": {
    "default_title": "Open hckr Dev Toolkit"
  },
  "background": {
    "service_worker": "service-worker.js",
    "type": "module"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content/detector.js"],
      "css": ["content/widget.css"],
      "run_at": "document_idle"
    }
  ],
  "permissions": [
    "storage",
    "contextMenus",
    "tabs",
    "activeTab"
  ],
  "commands": {
    "switch-to-previous-tab": {
      "suggested_key": {
        "default": "Alt+Q",
        "mac": "Alt+Q"
      },
      "description": "Switch to previously active tab"
    }
  }
}
```

---

## Permissions Breakdown

| Permission | Purpose & Justification |
| :--- | :--- |
| `storage` | Local client-side caching of tool preferences, last active tool, and non-sensitive drafts. Data never leaves the browser. |
| `contextMenus` | Registers right-click menu items ("Send to JSON Formatter", "Decode JWT", "Base64 Decode") for fast selection processing. |
| `tabs` | Required for tracking tab focus transitions to support the `Alt+Q` fast previous tab toggle. |
| `activeTab` | Grants temporary context access to the active tab when triggered via extension actions. |

---

## Content Security Policy (CSP)

MV3 forbids arbitrary string execution (`eval()`, `new Function()`) and remote script loading.
All libraries used within `hckr` (crypto, formatters, diff algorithms) are statically compiled into the local distribution bundle, requiring no external CDNs or network fetches.
