---
title: URL Encoder & Query Parser
sidebar_position: 5
---

# 🌐 URL Encoder & Query Parser

**Component**: `src/sidepanel/tools/UrlEncoder.tsx`  
**Styles**: `src/sidepanel/tools/UrlEncoder.css`

## Overview

A dual-mode URL utility providing full URL component encoding (`encodeURIComponent`) and an interactive URL query parameter table editor.

## Features

- **Standard Encoding**: Encode or decode URI strings, handling reserved characters and special symbols.
- **Visual Query Params Table**: Paste any full URL to automatically parse the Protocol, Hostname, Path, and Query Params into an editable key-value grid.
- **Live Reassembly**: Modify query parameters or add new keys and watch the URL reassemble dynamically with proper encoding.
