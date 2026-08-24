---
title: Quickstart Guide
sidebar_position: 1
---

# 🚀 Quickstart Guide

Get up and running with `hckr` development in under 2 minutes.

## Prerequisites

- **Node.js**: `v18.0.0+` (LTS recommended)
- **NPM**: `v9.0.0+`
- **Google Chrome**: Version 114+ (for Side Panel API support)

---

## 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/pateash/hckr-browser-ext.git
cd hckr-browser-ext

# Install root dependencies
make install

# Install DevDocs dependencies
make docs-install
```

---

## 2. Build the Extension

Run the watch build to compile TypeScript and bundle assets with Vite:

```bash
make dev
```

This populates the `dist/` directory with:
- `service-worker.js`
- `content/detector.js` & `content/widget.css`
- `src/sidepanel/index.html` and bundled assets
- `manifest.json`

---

## 3. Launch DevDocs Locally

To view this documentation site locally:

```bash
make docs-dev
```

Open [http://localhost:8878](http://localhost:8878) in your browser.

---

## 4. Run Verification Suite

```bash
make verify
```

This runs TypeScript type checking (`make lint`), builds the production bundle (`make build`), and packages the distribution zip (`make zip`).
