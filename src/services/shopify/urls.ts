import { env } from "app/config/env";

export const shopifyUrls = {
  /* Dividimos las URLs en base al tipo de datos
  que estamos obteniendo: */
  collections: {
    all:  `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
    products: (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`
  },
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/428795691232/products.json`,
  },
}
