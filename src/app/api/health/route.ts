/* Para escoger el runtime que queremos usar en este
endpoint realizamos el export de una constante
llamada runtime con el valor del runtime que
requerimos: */
export const runtime = 'edge'

export async function GET() {
  return Response.json({ status: 'ok' })
}