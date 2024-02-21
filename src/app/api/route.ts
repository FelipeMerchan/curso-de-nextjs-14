import { getProducts } from "app/services/shopify"

/* EL nombre de la función debe tener el
tipo de petición HTTP que vamos a utilizar: */
export async function GET() {
  const products = await getProducts()

  return Response.json({ products })
}