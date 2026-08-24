---
title: Hash & HMAC Generator
sidebar_position: 6
---

# 🔒 Hash & HMAC Generator

**Component**: `src/sidepanel/tools/HashGenerator.tsx`  
**Styles**: `src/sidepanel/tools/HashGenerator.css`

## Overview

Calculates cryptographic hashes and HMACs directly inside the browser using standard Web Crypto APIs (`window.crypto.subtle`) and pure JavaScript algorithms.

## Supported Algorithms

- **SHA-256**: Standard 256-bit secure hash.
- **SHA-512**: 512-bit high-security digest.
- **SHA-1**: Legacy SHA-1 hash for git commit reference checking.
- **MD5**: Legacy 128-bit checksum calculation.
- **HMAC Calculation**: Computes keyed-hash message authentication codes using a custom secret key.
- **Formatting Options**: Output in lowercase hex, uppercase hex, or Base64.
