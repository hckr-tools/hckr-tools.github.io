---
title: JWT Decoder & Inspector
sidebar_position: 3
---

# 🔑 JWT Decoder & Inspector

**Component**: `src/sidepanel/tools/JwtDecoder.tsx`  
**Styles**: `src/sidepanel/tools/JwtDecoder.css`

## Overview

Inspect JSON Web Tokens (JWT) client-side with zero data transmission. Decodes Header, Payload claims, and provides human-readable dates for timestamps.

## Features

- **Split Part Colorizer**: Distinct color-coding for Header (Red/Pink), Payload (Purple/Cyan), and Signature (Cyan/Blue).
- **Token Expiration Tracker**: Evaluates `exp`, `nbf`, and `iat` claims, displaying live countdown status (Active, Expiring Soon, Expired).
- **Standard Claim Hints**: Displays descriptive labels for standard registered claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`).
- **Signature Verification Notice**: Clarifies client-side signature status while keeping parsing 100% private and offline.
