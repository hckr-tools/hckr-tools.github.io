---
title: Dummy Data Generator
sidebar_position: 11
---

# 🎲 Dummy Data Generator

**Component**: `src/sidepanel/tools/DummyDataGenerator.tsx`  
**Styles**: `src/sidepanel/tools/DummyDataGenerator.css`

## Overview

Generate synthetic mock datasets for frontend prototyping, API testing, and database seeding without relying on external mock services.

## Features

- **Field Schema Builder**: Add custom field definitions with specific data types:
  - Names (Full Name, First, Last, Username)
  - Internet (Email, Domain, IPv4, User-Agent, Avatar URL)
  - Location (Country, City, Street, Zip code, Lat/Long)
  - Commerce (Price, Product Name, Category)
  - Datetime & Identifiers (UUID v4, Epoch Timestamp, ISO Date)
- **Output Formats**: Export as JSON Array, JSON Lines (NDJSON), or CSV table.
- **Custom Count**: Generate from 1 to 200 records instantly.
