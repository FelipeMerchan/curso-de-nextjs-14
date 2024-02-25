import { getMainProducts } from "app/services/shopify/products"

/* EL nombre de la función debe tener el
tipo de petición HTTP que vamos a utilizar: */
export async function GET() {
  const products = await getMainProducts()

  return Response.json({ products })
}