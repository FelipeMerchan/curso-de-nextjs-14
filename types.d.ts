interface ErrorPageProps {
  error: Error;
  /* reset es un método que ya implementa y que ofrece Next.js en los
  archivos de error y permite que si algo falla podamos hacer
  un nuevo intento de montar el componente y eso hace que se vuelva a 
  realizar la petición que falló dado a que esa petición está invocada dentro del
  componente: */
  reset: () => void;
}