import { shopifyUrls } from "./urls"
import { env } from "app/config/env"

export const getProducts = async (id?: string): Promise<ProductType[] | undefined> => {
  try {
    const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all
    const response = await fetch(apiUrl, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
      }
    })
  
    const { products } = await response.json()
    const transformedProducts = products.map((product: Product) => ({
      description: product.body_html,
      gqlId: product.variants[0].admin_graphql_api_id,
      handle: product.handle,
      id: product.id,
      image: product.images[0].src,
      price: product.variants[0].price,
      quantity: product.variants[0].inventory_quantity,
      tags: product.tags,
      title: product.title,
    }))
  
    return transformedProducts
  } catch(error) {
    console.log('Manejar este error')
  }
}

export const getMainProducts = async (): Promise<Product[] | undefined> => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
    }),
    /* Crear tag que será usada para identificar esta request
    al momento de querer revalidar la caché de la misma: */
    next: {
      tags: ['main-products'],
    }
  })

  const { products } = await response.json()

  return products
}