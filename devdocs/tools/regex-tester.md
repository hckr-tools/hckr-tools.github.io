---
title: Regex Tester & Debugger
sidebar_position: 10
---

# 🔍 Regex Tester & Debugger

**Component**: `src/sidepanel/tools/RegexTester.tsx`  
**Styles**: `src/sidepanel/tools/RegexTester.css`

## Overview

Test regular expressions interactively against multiline sample text with real-time match highlighting and capture group inspection.

## Features

- **Flag Toggles**: Clickable flags for Global (`g`), Case-Insensitive (`i`), Multiline (`m`), DotAll (`s`), and Unicode (`u`).
- **Visual Highlighting**: Background highlight overlays across all matching spans in the test string.
- **Match Table**: Detailed breakdown showing Match Index, Full Match String, and individual Capture Groups (`$1`, `$2`, named groups).
- **Substitution / Replace Mode**: Test string replacement patterns using capture group references.
