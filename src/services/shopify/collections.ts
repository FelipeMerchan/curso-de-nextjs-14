import { shopifyUrls } from "./urls"
import { env } from "app/config/env"

export const getCollections = async (): Promise<any[] | undefined> => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
      }
    })
  
    const { smart_collections } = await response.json()
    const transformedCollections = smart_collections.map((collection: Collection) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      }
    })

    return transformedCollections
  } catch(error) {
    console.log('Manejar este error')
  }
}