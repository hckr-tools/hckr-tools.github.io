---
title: E2E Testing with Playwright
sidebar_position: 1
---

# 🧪 E2E Testing with Playwright

`hckr` uses Playwright to test extension behavior directly in a live Chromium browser instance with the unpacked extension loaded.

## Test Runner Architecture

Chrome extensions require special browser context launch arguments (`--disable-extensions-except` and `--load-extension`):

```typescript
// e2e/fixtures.ts (or playwright.config.ts)
import { test as base, chromium, type BrowserContext } from '@playwright/test';
import path from 'path';

export const test = base.extend<{
  context: BrowserContext;
  extensionId: string;
}>({
  context: async ({}, use) => {
    const pathToExtension = path.resolve(__dirname, '../dist');
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await use(context);
    await context.close();
  },
});
```

---

## Running Test Suites

```bash
# Run headless e2e tests
make test-e2e

# Run with visible headed browser window
make test-e2e-headed

# Run with Playwright interactive UI test runner
make test-e2e-ui
```

---

## What We Test

1. **Side Panel Mounting**: Validates that all 11 tool tabs mount without runtime console exceptions.
2. **Tool Functionality**: Formatter parsing, JWT decoding, Base64 roundtrip encoding, Hash calculations, and UUID generation.
3. **Content Script Injection**: Tests selection badge triggers on mock test pages.
