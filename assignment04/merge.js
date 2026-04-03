const SHOP = "bedding-den.myshopify.com";
const ACCESS_TOKEN = "ACCESS_TOKEN";  
const GRAPHQL_URL = `https://${SHOP}/admin/api/2024-01/graphql.json`;



async function shopifyFetch(query, variables = {}) {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  return res.json();
}



async function getProducts() {
  const query = `
  {
    products(first: 2) {
      edges {
        node {
          id
          title
          variants(first: 50) {
            edges {
              node {
                price
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const data = await shopifyFetch(query);

  console.log("FETCH PRODUCTS:", JSON.stringify(data, null, 2));

  return data.data.products.edges.map(e => e.node);
}




async function createProduct() {
  const mutation = `
  mutation {
    productCreate(input: {
      title: "Merged Bedding Product"
    }) {
      product {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
  `;

  const data = await shopifyFetch(mutation);

  console.log("CREATE PRODUCT:", JSON.stringify(data, null, 2));

  return data.data.productCreate.product.id;
}




async function addOptions(productId) {
  const mutation = `
  mutation {
    productOptionsCreate(
      productId: "${productId}",
      options: [
        {
          name: "Size",
          values: [
            { name: "Twin" },
            { name: "Queen" },
            { name: "King" }
          ]
        },
        {
          name: "Color",
          values: [
            { name: "White" },
            { name: "Grey" },
            { name: "Blue" }
          ]
        }
      ]
    ) {
      product {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
  `;

  const data = await shopifyFetch(mutation);

  console.log("ADD OPTIONS:", JSON.stringify(data, null, 2));
}



async function createVariantsBulk(productId, variants) {
  const mutation = `
  mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(
      productId: $productId,
      variants: $variants
    ) {
      productVariants {
        id
        title
      }
      userErrors {
        field
        message
      }
    }
  }
  `;

  const variables = {
    productId,
    variants: variants.map(v => ({
      price: v.price,
      optionValues: [
        { name: v.size, optionName: "Size" },
        { name: v.color, optionName: "Color" }
      ]
    }))
  };

  const data = await shopifyFetch(mutation, variables);

  console.log("BULK VARIANTS:", JSON.stringify(data, null, 2));
}




async function run() {
  const products = await getProducts();

  console.log("Fetched products");

  const newProductId = await createProduct();

  console.log("Created product:", newProductId);

  await addOptions(newProductId);

  
  await new Promise(r => setTimeout(r, 1500));

  const variantMap = {};

  


  for (const product of products) {
    for (const v of product.variants.edges) {
      const variant = v.node;

      let size = "";
      let color = "";

      variant.selectedOptions.forEach(opt => {
        if (opt.name.toLowerCase().includes("size")) size = opt.value;
        if (opt.name.toLowerCase().includes("color")) color = opt.value;
      });

      const key = `${size}-${color}`;

      if (!variantMap[key]) {
        variantMap[key] = {
          size,
          color,
          price: variant.price
        };
      } else {
        variantMap[key].price = Math.max(
          variantMap[key].price,
          variant.price
        );
      }
    }
  }

const variantsArray = Object.values(variantMap).filter(
  v => !(v.size === "Twin" && v.color === "White")
);
  await createVariantsBulk(newProductId, variantsArray);

  console.log("all variants created");
  console.log("GTG");
}


run();
