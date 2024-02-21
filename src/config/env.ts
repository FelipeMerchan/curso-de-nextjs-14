/* En el folder config vamos a almacenar todas nuestras configuraciones.
EN el archivo env va a contener todos los valores de las variables
de entorno */
export const env = {
  SHOPIFY_HOSTNAME: process.env.SHOPIFY_HOSTNAME ?? '',
  SHOPIFY_TOKEN: process.env.SHOPIFY_TOKEN ?? '',
}