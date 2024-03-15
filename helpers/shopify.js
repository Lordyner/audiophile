const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN

export async function callShopify(query, variables) {
  const fetchUrl = `https://${domain}/api/2023-04/graphql.json`
  console.log(variables)
  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables })
  }

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    )
    console.log("data : " + JSON.stringify(data));
    return data;
  } catch (error) {
    console.log("error : " + error)
    throw new Error("Could not fetch products!")
  }
}

const gql = String.raw

export const AllProducts = gql`
  query Products {
    products(first: 22) {
      edges {
        node {
          id
          title
          handle
          images(first: 10) {
            edges {
              node {
                url
                width
                height
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          productType
        }
      }
    }
  }
`
// Generate a graphQL query to retrieve products by a type passed as a variable
export const ProductsByType = gql`
  query ProductsByType($productType: String) {
    products(query: "product_type:$productType") {
      edges {
        node {
          id
          title
          handle
          images(first: 10) {
            edges {
              node {
                url
                width
                height
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          productType
        }
      }
    }
  }
`



