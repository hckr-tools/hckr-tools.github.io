---
title: Installation
sidebar_position: 2
---

# Installing hckr

You can install **hckr** from the Chrome Web Store or run it as an unpacked developer extension.

## Method 1: Chrome Web Store (Recommended)

1. Open the [Chrome Web Store](https://chrome.google.com/webstore).
2. Search for **hckr**.
3. Click **Add to Chrome**.
4. Pin the extension icon to your toolbar for instant 1-click sidepanel access.

## Method 2: Load Unpacked (From Source)

If you are developing features or testing the latest unreleased builds:

1. Clone the extension repository:
   ```bash
   git clone https://github.com/hckr-tools/hckr-browser-ext.git
   cd hckr-browser-ext
   ```
2. Install dependencies and compile:
   ```bash
   npm install
   npm run build
   ```
3. Open Chrome and navigate to `chrome://extensions/`.
4. Toggle **Developer mode** in the top-right corner.
5. Click **Load unpacked** and select the `dist/` directory inside the repository.
6. The extension is now active in your browser.
