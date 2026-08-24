---
title: Timestamp & Epoch Converter
sidebar_position: 8
---

# ⏱️ Timestamp & Epoch Converter

**Component**: `src/sidepanel/tools/TimestampConverter.tsx`  
**Styles**: `src/sidepanel/tools/TimestampConverter.css`

## Overview

Convert between Unix Epoch timestamps and human-readable date/time formats across timezones.

## Features

- **Live Epoch Clock**: Real-time ticking counter showing current epoch in seconds and milliseconds.
- **Auto-Detection**: Intelligently identifies whether input numbers are in Seconds (10 digits) or Milliseconds (13 digits).
- **Multi-Format Output**:
  - ISO-8601 string (`YYYY-MM-DDTHH:mm:ss.sssZ`)
  - UTC string
  - Local timezone with locale formatting
  - Relative time ("5 minutes ago", "in 2 hours")
- **Date to Timestamp**: Interactive date & time picker that outputs corresponding epoch values.
