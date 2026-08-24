---
title: Chrome Web Store Submission
sidebar_position: 2
---

# 🚀 Chrome Web Store Submission

Guidelines for submitting `hckr` updates to the Chrome Web Store Developer Dashboard.

## Pre-Flight Checklist

Before submitting a new version:

- [ ] Bump version in `package.json` and `public/manifest.json`.
- [ ] Run `make verify` and ensure all tests and builds pass.
- [ ] Ensure `hckr-extension.zip` is freshly generated.
- [ ] Verify that no remote scripts or external CDNs are referenced in the bundle.
- [ ] Confirm privacy policy and offline operation descriptions.

---

## Submission Steps

1. Log in to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).
2. Select **hckr — Dev Toolkit** (or click **New Item** for initial submission).
3. Under the **Package** tab, upload `hckr-extension.zip`.
4. Review store listing details, screenshots (1280x800 or 640x400), and promotional graphics.
5. In the **Privacy** tab, verify permission justifications:
   - `storage`: "Stores user preferences and local formatting drafts."
   - `contextMenus`: "Adds right-click options to decode or format selected text."
   - `tabs` / `activeTab`: "Supports quick keyboard shortcut to toggle to previously active tab."
6. Click **Submit for Review**.
