` Assignment 01 — Variant Swatch Selector with OOS Handling `

`Overview`

In this assignment, I implemented a custom variant selector for a Shopify product that clearly shows available and out-of-stock combinations for color and size.

The goal was to improve the user experience by making variant selection more visual and informative while keeping Shopify’s native logic intact.



` Approach `

I used Shopify Liquid to access product variant data and built a custom color swatch UI using JavaScript and CSS.

Instead of replacing Shopify’s variant system, I synced my custom swatches with the native variant inputs. When a user clicks on a color swatch, it programmatically triggers the corresponding Shopify variant input to ensure compatibility with pricing, availability, and image updates.

For color mapping, I used a simple mapping approach (color name → hex value) directly in Liquid for better control and simplicity.



` Swatch UI `

- Circular color pills were created using CSS
- Each swatch represents a color variant
- Active selection is highlighted with an outline
- Swatches are touch-friendly (44×44px) for mobile usability


` Out-of-Stock Handling `

To determine availability, I checked all variants for a given color using:


variant.available


If no available variant exists for that color:
- The swatch is greyed out
- A diagonal red strike-through is applied
- The swatch remains visible (not hidden), maintaining context



` Variant Synchronization `

Clicking a swatch triggers the corresponding hidden Shopify input:


input.click()


This ensures:
- Correct variant selection
- Price updates
- Image updates (handled by Shopify)
- No need to rebuild variant logic from scratch



` Dynamic Variant Display `

The selected variant is displayed dynamically below the swatches:

Example:

Colour: White — Size: Queen

This updates automatically when the user changes selections.



` Responsiveness `

- Swatches are designed to be fully responsive
- Minimum tap target size is maintained (44px)
- Layout adapts well for mobile screens



` Notes `

- I chose a custom swatch approach instead of relying entirely on Shopify’s default UI to have more control over styling and OOS indication.
- The solution still leverages Shopify’s native variant system to ensure reliability and maintainability.

