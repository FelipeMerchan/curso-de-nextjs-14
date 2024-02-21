import { shopifyUrls } from "./urls"
import { env } from "app/config/env"
import { Product } from "app/models/products"

export const getProducts = async (): Promise<Product[] | undefined> => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
      }
    })
  
    const { products } = await response.json()
  
    return products
  } catch(error) {
    console.log('Manejar este error')
  }
}