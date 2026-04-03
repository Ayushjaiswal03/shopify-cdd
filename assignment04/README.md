` Assignment 04 — Variant Merge (Shopify Admin GraphQL API)`

`  Overview  `

In this assignment, I worked on merging couple of Shopify products that had the same variants (Size and Color) into a single product using the Shopify Admin GraphQL API.

The goal was to take two separate products and combine their variants into one product while avoiding duplicates and keeping the correct pricing.

---

`  Approach. `

I started by fetching the first two products from the store using the GraphQL API. Each product had variants based on Size (Twin, Queen, King) and Color (White, Grey, Blue).

Then I created a new product called `Merged Bedding Product`.

After creating the product, I added two options:
- Size
- Color

Next, I looped through all variants of both products and created a mapping using a unique key:


Size + Color


This helped me:
- Avoid duplicate variants
- Merge data properly

If the same variant existed in both products, I kept the `maximum price`.

---

`Variant Creation`

Once the mapping was ready, I converted it into an array and used:


productVariantsBulkCreate


to create all variants in one API call.

I also filtered out one combination (`Twin + White`) just to test custom logic and confirm the system works correctly.

---

` Output `

The script successfully:
- Created a new product
- Added Size and Color options
- Merged variants from both products
- Avoided duplicate variants
- Assigned correct prices

---

` Notes / Learnings `

- Shopify automatically creates a default variant when a product is created, which can sometimes conflict with bulk creation.
- Proper mapping of option names (`Size`, `Color`) is very important for variant creation to work.
- Using `optionValues` instead of `options` is required in GraphQL bulk variant creation.

---

` How to Run `

1. Add store name and Admin API access token:
   const SHOP = "your-store.myshopify.com";
   const ACCESS_TOKEN = "your-access-token";


2. Run the script: