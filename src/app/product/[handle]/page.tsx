import { ProductView } from "app/components/product/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
  searchParams: {
    id: string
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