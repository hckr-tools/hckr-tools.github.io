---
title: Type Checking & Static Analysis
sidebar_position: 2
---

# 🛡️ Type Checking & Static Analysis

We enforce strict TypeScript typing across the extension frontend, service worker, content scripts, and tests.

## Running Type Checks

```bash
make lint
```

This runs `tsc --noEmit` against `tsconfig.json`.

---

## TypeScript Config Highlights

- **`strict: true`**: Strict null checks, implicit any prevention, and strict bind/call/apply.
- **Path Aliases**:
  - `@shared/*` -> `src/shared/*`
  - `@tools/*` -> `src/sidepanel/tools/*`
  - `@components/*` -> `src/sidepanel/components/*`
- **Chrome Types**: Full autocompletion and type checking for the Chrome Extensions API via `@types/chrome`.
