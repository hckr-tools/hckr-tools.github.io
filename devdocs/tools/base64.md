---
title: Base64 Encoder / Decoder
sidebar_position: 4
---

# 🔤 Base64 Encoder / Decoder

**Component**: `src/sidepanel/tools/Base64Tool.tsx`  
**Styles**: `src/sidepanel/tools/Base64Tool.css`

## Overview

Encode and decode arbitrary text and files using standard Base64 or URL-Safe Base64 variants.

## Features

- **Text Mode**: Full UTF-8 support (handling emojis and multibyte unicode characters safely without truncation).
- **URL-Safe Toggle**: Switches between standard `+ / =` and URL-safe `- _` alphabet without padding.
- **File / Image to Data URI**: Drag-and-drop file encoder producing `data:[mime];base64,...` strings for inline CSS/HTML usage.
- **Bi-directional conversion**: Instant toggling between Encode and Decode modes.
