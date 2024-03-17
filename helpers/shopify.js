import { getLogger } from "@/Logging/log-util";

const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN
const logger = getLogger('Shopify Helper');
export async function callShopify(query, variables = {}) {
  const fetchUrl = `https://${domain}/api/2023-04/graphql.json`

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  }

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    )
    logger.debug('Data fetched from Shopify %s', JSON.stringify(data));
    return data;
  } catch (error) {
    logger.error('Error fetching data from Shopify', error);
    throw new Error("Could not fetch products!")
  }
}

const gql = String.raw;


// Generate a graphQL query to retrieve products by a type passed as a variable
export const ProductsByType = gql`
  query ProductsByType($productTypeQuery: String!) {
    products(first: 10, query: $productTypeQuery	) {
      edges {
        node {
          title
          description
          handle
          images(first: 15) {
            edges {
              node {
                url
                width
                height
              }
            }
          }
          productType
          tags
        }
      }
    }
  }
`

export const ProductByHandle = gql`
  query ProductByHandle($productHandle: String!) {
    product( handle: $productHandle	) {
      title
      description
      handle
      images(first: 15) {
        edges {
          node {
            url
            width
            height
            altText
          }
        }
      }
      productType
      tags
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      inTheBox: metafield(namespace: "custom", key: "inthebox") {
        value
        type
      }
      features: metafield(namespace: "custom", key: "features") {
        value
        type
      }
    }
  }
`



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