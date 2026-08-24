---
title: Local Environment Setup
sidebar_position: 2
---

# 💻 Local Environment Setup

Detailed breakdown of project dependencies, folder structure, and editor configuration.

## Repository Layout

```
hckr-tools-browser-extension/
├── Makefile                # Developer task automation
├── package.json            # Root project metadata and scripts
├── vite.config.ts          # Vite multi-entry build configuration
├── tsconfig.json           # TypeScript configuration
├── public/                 # Static extension assets (manifest.json, icons)
├── src/
│   ├── service-worker.ts   # Chrome MV3 background service worker
│   ├── content/            # Content script & page token detector
│   │   ├── detector.ts
│   │   └── widget.css
│   ├── sidepanel/          # React 18 sidepanel application
│   │   ├── index.html
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── components/     # Shared UI components & layout
│   │   ├── styles/         # Global themes & CSS variables
│   │   └── tools/          # 11 developer utility implementations
│   └── shared/             # Shared types, storage helpers, messaging schemas
├── devdocs/                # Docusaurus documentation portal
├── e2e/                    # Playwright end-to-end test suite
└── dist/                   # Compiled unpacked extension output
```

## Recommended VS Code Extensions

- **Tailwind CSS IntelliSense** / PostCSS plugins
- **Biome** / ESLint & Prettier
- **Playwright Test for VSCode**
- **MDX** for DevDocs authoring

## Node Scripts Overview

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs Vite in watch mode to automatically rebuild `dist/` on code changes |
| `npm run build` | Runs `tsc` typecheck and full Vite bundle build with static asset copies |
| `npm run lint` | Runs `tsc --noEmit` to validate TypeScript strict mode without outputting files |
| `npm run test:e2e` | Runs headless Playwright browser tests against the loaded unpacked extension |
| `npm run zip` | Packages `dist/` into `hckr-extension.zip` ready for store submission |
