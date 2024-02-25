import { ProductView } from "app/components/product/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

/* Dynamic Metadata: cuando el contenido de la página es dinámico, debido a
que la página es una ruta dinámica, podemos agregar los metadatos de la siguiente forma: */
export async function generateMetadata({ searchParams }: ProductPageProps) {
  const { id } = searchParams
  const productList = await getProducts(id) as ProductType[]
  const product = productList[0]

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    }
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const { id } = searchParams
  const productList = await getProducts(id) as ProductType[]
  
  if (!id) {
    redirect('/store')
  }

  return <ProductView product={productList[0]} />
}