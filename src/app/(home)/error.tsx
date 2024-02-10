"use client"

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  /* reset es un método que ya implementa y que ofrece Next.js en los
  archivos de error y permite que si algo falla podamos hacer
  un nuevo intento de montar el componente y eso hace que se vuelva a 
  realizar la petición que falló dado a que esa petición está invocada dentro del
  componente: */
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    /* Aquí podríamos enviar el error con un logger a un servicio de
    trazabiliadd de errores que podamos tener.*/

    /* Nunca debemos imprimir o exporner al cliente los errores
    (usando un console.log(error) o renderizando el mensaje de error en
    la UI) ya que podríamos exponer información confidencial. */
  }, [])

  return (
    <div style={{
      padding: ' 0 10rem',
    }}>
      <h1>Ha ocurrido un error</h1>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  )
}