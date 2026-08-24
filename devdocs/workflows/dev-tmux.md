---
title: Tmux Multi-Pane Development
sidebar_position: 2
---

# 🖥️ Tmux Multi-Pane Development

Launch an integrated terminal workspace with one command:

```bash
make dev-tmux
```

## Layout Architecture

```
+------------------------------------+------------------------------------+
|                                    |                                    |
|   Pane 0: Extension Watch Build    |   Pane 1: DevDocs Server (8878)    |
|   (make dev / vite build --watch)  |   (make docs-dev)                  |
|                                    |                                    |
+------------------------------------+------------------------------------+
|                                                                         |
|   Pane 2: Interactive Developer Shell (git, tests, lint, make commands) |
|                                                                         |
+-------------------------------------------------------------------------+
```

---

## Tmux Session Management

- **Detach session**: Press `Ctrl+B` then `D`.
- **Reattach session**: Run `make dev-tmux` (automatically reattaches to existing session).
- **Kill dev ports**: Run `make dev-kill-ports` to stop all listeners on ports 5173 & 8878.
