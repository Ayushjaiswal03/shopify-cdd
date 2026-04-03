` Assignment 03 — Collection Filter Drawer (Mobile) with Multi-Select`

 `Overview`

In this assignment, I built a mobile-friendly filter drawer for the collection page that supports multi-select filters and updates products dynamically without reloading the page.

The goal was to improve the filtering experience by making it more accessible, responsive, and smooth for users, especially on mobile devices.

---

 `Approach`

Instead of using Shopify’s default filter UI, I created a custom filter drawer using Liquid, JavaScript, and CSS.

I used Shopify’s native `collection.filters` object to dynamically render all available filters (like size, color, price), ensuring the solution remains compatible with Shopify’s backend filtering system.

The filtering itself is handled via AJAX using `fetch`, so the product grid updates without a full page reload.

---

` Filter Drawer UI`

- A "Filters" button opens a slide-in drawer from the left
- Drawer includes:
  - Filter groups (Color, Size, etc.)
  - Multi-select checkboxes
  - Price range inputs
  - Apply and Clear buttons
- A semi-transparent overlay is added behind the drawer

The drawer can be closed by:
- Clicking the close (✕) button
- Clicking outside on the overlay

---

` Multi-Select Filtering (AJAX)`

When the user clicks `Apply`:

1. Form data is collected using:

new FormData(form)


2. Converted into query params:

URLSearchParams


3. A new filtered page is fetched using:

fetch()


4. The product grid is updated dynamically without reload

This ensures:
- Faster interaction
- Smooth UX
- No page flickering

---

 `Active Filters (Chips)`

Selected filters are displayed as chips above the product grid.

Example:

Blue ✕ Queen ✕


Features:
- Each chip can be removed individually
- Removing a chip updates the URL and reloads filtered results
- Keeps users aware of active filters

---

 `Clear Filters`

A `Clear button` resets all filters by redirecting to the base collection URL.

This provides a quick way to start fresh without manually unchecking options.

---

 `Styling & UX`

- Clean drawer layout with proper spacing
- Checkbox items aligned with labels and counts
- Smooth drawer animation using CSS transitions
- Improved close button styling (no unwanted background)
- Product grid shows loading state (opacity change)

---

 `Mobile Optimization`

- Drawer takes full width on smaller screens
- Touch-friendly inputs and buttons
- Easy-to-use layout for one-handed interaction
- Overlay improves focus and usability

