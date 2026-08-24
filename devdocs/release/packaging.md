---
title: Packaging & Artifacts
sidebar_position: 1
---

# 📦 Packaging & Artifacts

Generate distributable archive files for testing and submission.

## Build and Zip Target

```bash
make zip
```

## What Happens Under the Hood

1. **Type Checking**: Executes `tsc --noEmit` to verify type safety.
2. **Vite Production Build**: Compiles React app and scripts with minification and tree shaking to `dist/`.
3. **Asset Mirroring**: Copies `manifest.json` and `widget.css` into `dist/`.
4. **Archive Generation**: Creates `hckr-extension.zip` from the contents of `dist/`.

## Distribution Files

- **`dist/`**: Unpacked extension directory (for local developer loading).
- **`hckr-extension.zip`**: Compressed zip file (for Chrome Web Store dashboard upload).
