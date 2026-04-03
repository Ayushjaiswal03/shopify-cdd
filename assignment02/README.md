` Assignment 02 — Sticky Mobile Add-to-Cart Bar `

` Overview `

In this assignment, I implemented a sticky Add-to-Cart (ATC) bar for the product page that appears when the main product form goes out of view.

The goal was to improve mobile usability by keeping the purchase action easily accessible without requiring users to scroll back up.

---

 `Approach`

I used the IntersectionObserver API to detect when the main product form is no longer visible on the screen. When the form goes out of view, the sticky bar smoothly appears from the bottom. When the form is visible again, the sticky bar hides.

This ensures the UI behaves naturally without constantly showing duplicate actions.

---

` Sticky Bar UI `

- Positioned fixed at the bottom of the screen
- Smooth slide-in animation using CSS (`transform`)
- Displays:
  - Product title
  - Selected variant (Color / Size)
  - Add to Cart button

The layout is responsive and adapts for mobile screens by stacking elements vertically.

---

` Add to Cart Functionality `

Instead of redirecting or reloading the page, I used Shopify’s AJAX Cart API:


/cart/add.js


This allows:
- Adding items to cart without page refresh
- Faster and smoother user experience

I also added loading and success states:
- "Adding..." → while request is in progress
- "Added ✓" → on success

---

` Variant Synchronization `

The sticky bar reflects the currently selected variant by reading data from Shopify’s variant selector:


[data-selected-variant]


Whenever the variant changes:
- The displayed variant text updates dynamically
- Ensures consistency between main form and sticky bar

---

` Styling & UX `

- Clean minimal design matching Shopify theme
- Button has loading state and disabled interaction
- Shadow and border used for separation from page
- Fully responsive for mobile devices

---

` Mobile Optimization `

- Sticky bar spans full width on mobile
- Button becomes full-width for easy tapping
- Maintains proper spacing and readability

