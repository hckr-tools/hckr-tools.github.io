---
title: Makefile Reference & Commands
sidebar_position: 1
---

# ⚡ Makefile Reference & Commands

The project root includes a `Makefile` that unifies all developer operations, port management, testing, and documentation commands.

## All Available Targets

| Target | Description | Example |
| :--- | :--- | :--- |
| `make help` | Display all documented targets dynamically. | `make help` |
| `make install` | Install root npm dependencies. | `make install` |
| `make dev` | Start Vite in watch mode to automatically rebuild `dist/`. | `make dev` |
| `make build` | Typecheck and compile production bundle in `dist/`. | `make build` |
| `make clean` | Remove `dist/` and `hckr-extension.zip`. | `make clean` |
| `make zip` | Build and package extension into `hckr-extension.zip`. | `make zip` |
| `make lint` | Run TypeScript typecheck (`tsc --noEmit`). | `make lint` |
| `make test-e2e` | Run headless Playwright test suite. | `make test-e2e` |
| `make test-e2e-headed` | Run Playwright test suite in headed browser mode. | `make test-e2e-headed` |
| `make test-e2e-ui` | Open interactive Playwright UI runner. | `make test-e2e-ui` |
| `make verify` | Run full validation pipeline (`lint`, `build`, `zip`). | `make verify` |
| `make docs-install` | Install Docusaurus dependencies in `devdocs/`. | `make docs-install` |
| `make docs-dev` | Start DevDocs local server on port 8878 (or `DOCS_PORT`). | `make docs-dev DOCS_PORT=8878` |
| `make docs-build` | Build static Docusaurus documentation website. | `make docs-build` |
| `make docs-serve` | Serve the built Docusaurus site locally. | `make docs-serve` |
| `make stop-port` | Stop listener on a specific port. | `make stop-port PORT=8878` |
| `make dev-kill-ports` | Stop all processes on dev ports (5173, 8878). | `make dev-kill-ports` |
| `make dev-tmux` | Launch complete multi-pane tmux developer session. | `make dev-tmux` |
