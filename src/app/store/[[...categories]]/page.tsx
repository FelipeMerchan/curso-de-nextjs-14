interface CategoryProps {
  params: {
    categories: string[]
    searchParams?: string
  }
}

/* Dynamic Segments (las urls de las páginas que son dinámicas en el navegador,
  por ejemplo juegos de mesa: '/store/juegos-de-mesa') are passed as the params
  prop to layout, page, route, and generateMetadata functions: */
export default function Category({ params }: CategoryProps) {
  return (
    <h1>Categoría {params.categories}</h1>
  )
}