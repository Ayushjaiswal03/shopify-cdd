#  Shopify Frontend & API Assignments — California Design Den

## Overview

This repository contains my implementation of Shopify-based frontend and backend assignments focused on improving user experience, performance, and data handling.

The work covers product page enhancements, collection filtering UX, and backend data migration using Shopify’s Admin GraphQL API.

All solutions are built on a Shopify Partner development store using the Dawn theme, without relying on any paid apps.

---

##  Assignments Completed

###   Variant Swatch Selector with OOS Handling

Built a custom color swatch selector to improve variant selection UX.

**Key Features:**
- Circular color swatches (custom UI)
- Out-of-stock handling with diagonal strike-through
- Dynamic variant selection syncing with Shopify inputs
- Selected variant display (Color + Size)
- Fully responsive (mobile-friendly)

**Tech Used:**
- Shopify Liquid
- JavaScript (DOM manipulation)
- CSS (custom UI)

---

###  Sticky Mobile Add-to-Cart Bar

Implemented a sticky Add-to-Cart bar that appears when the main product form is out of view.

**Key Features:**
- Uses IntersectionObserver for visibility detection
- AJAX add-to-cart (no page reload)
- Loading + success states
- Displays selected variant dynamically
- Optimized for mobile UX

**Tech Used:**
- JavaScript (IntersectionObserver, Fetch API)
- Shopify AJAX Cart API
- CSS (animations, responsive layout)

---

###  Collection Filter Drawer (Mobile) with Multi-Select

Built a custom mobile filter drawer for collection pages with multi-select functionality.

**Key Features:**
- Slide-in filter drawer UI
- Multi-select filters (color, size, etc.)
- AJAX-based product filtering
- Active filter chips with removal
- Clear filters functionality
- Smooth UI interactions

**Tech Used:**
- Shopify Liquid (`collection.filters`)
- JavaScript (fetch, DOMParser)
- CSS (drawer UI, responsiveness)

---

###  Variant Merge via Admin GraphQL API

Created a Node.js script to merge multiple products into a single product with combined variants.

**Key Features:**
- Fetches multiple products via Admin GraphQL API
- Merges variants based on Size + Color
- Handles duplicate combinations (keeps max price)
- Creates new product and bulk variants
- Demonstrates backend data migration logic

**Tech Used:**
- Node.js
- Shopify Admin GraphQL API
- Data transformation logic

---

##  Key Concepts Covered

- Shopify Liquid templating
- Variant data model & product structure
- AJAX interactions (cart + filtering)
- DOM manipulation & event handling
- Mobile-first UI/UX design
- GraphQL API integration
- Data merging & migration logic

---

##  Store Setup

- Built on Shopify Partner Development Store
- Dawn theme (customized)
- No third-party apps used



##  Author

Ayush Jaiswal  
Frontend / Full-Stack Developer  
