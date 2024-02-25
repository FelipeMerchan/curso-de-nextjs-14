/* En el folder config vamos a almacenar todas nuestras configuraciones.
El archivo env va a contener todos los valores de las variables
de entorno */
export const env = {
  CACHE_TOKEN: process.env.CACHE_TOKEN,
  SHOPIFY_HOSTNAME: process.env.SHOPIFY_HOSTNAME ?? '',
  SHOPIFY_TOKEN: process.env.SHOPIFY_TOKEN ?? '',
}