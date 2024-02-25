import { env } from "app/config/env"
import { revalidateTag } from "next/cache"

export async function POST(request: Request) {
  const body = await request.json()
  const { tag, token } = body

  if (!tag ?? !token) {
    return Response.json({ error: 'Missing tag or token' }, { status: 400 })
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json({ error: 'Invalid token' }, { status: 401 })
  }

  /* Comúnmente para implementar revalidateTag se hace a
  través de un endpoint creado en Next.js.
  Con revalidateTag podemos revalidar los datos que
  tenemos en el caché para las peticiones que tengan
  determinada tag, como lo es la tag 'main-products' en este caso:*/
  revalidateTag(tag)

  return Response.json({ success: true })
}