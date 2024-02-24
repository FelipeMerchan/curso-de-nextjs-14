import { ProductsWrapper } from "app/components/store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"

interface CategoryProps {
  params: {
    categories: string[]
    searchParams?: string
  }
}

/* Dynamic Segments (las urls de las páginas que son dinámicas en el navegador,
  por ejemplo juegos de mesa: '/store/juegos-de-mesa') are passed as the params
  prop to layout, page, route, and generateMetadata functions: */
export default async function Category({ params }: CategoryProps) {
  const { categories } = params
  let productList = []
  const collections = await getCollections()

  if (categories) {
    const selectedCollectionId = collections?.find((collection) => String(collection.id) === categories[0]).id
    productList = await getCollectionProducts(String(selectedCollectionId)) as ProductType[]
  } else {
    productList = await getProducts() as ProductType[]
  }

  return (
    <ProductsWrapper products={productList} />
  )
}