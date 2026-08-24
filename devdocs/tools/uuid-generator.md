---
title: UUID & ID Generator
sidebar_position: 7
---

# 🆔 UUID & ID Generator

**Component**: `src/sidepanel/tools/UuidGenerator.tsx`  
**Styles**: `src/sidepanel/tools/UuidGenerator.css`

## Overview

Generate single or bulk cryptographically secure identifiers for testing and database seeding.

## Features

- **UUID v4**: Standard RFC 4122 randomly generated UUIDs via `crypto.randomUUID()`.
- **Bulk Generation**: Generate 1 to 500 identifiers in a single click.
- **ULID / NanoID**: Time-sortable and compact URL-friendly ID options.
- **Formatting Options**:
  - Uppercase vs. Lowercase
  - With or without hyphens
  - Wrapped in quotes or array syntax
