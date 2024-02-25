import { env } from "app/config/env"
import { revalidatePath } from "next/cache"

export async function POST(request: Request) {
  const body = await request.json()
  const { path, token } = body

  if (!path ?? !token) {
    return Response.json({ error: 'Missing path or token' }, { status: 400 })
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json({ error: 'Invalid token' }, { status: 401 })
  }

  /* Comúnmente para implementar revalidatePath se hace a
  través de un endpoint creado en Next.js.
  Con revalidatePath podemos revalidar los datos que
  tenemos en el caché para las peticiones que sean
  originadas desde determinados path o rutas en la app. Por ejemplo,
  revalidar la caché de las peiticones que se hacen en el server
  de la página '/product/123':*/
  revalidatePath(path)

  return Response.json({ success: true })
}