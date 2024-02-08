import React from 'react'

const getProducts = async () => {
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
    headers: {
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY ?? "",
    }
  })

  const data = await response.json()

  return data
}

/* Los server component pueden ser asíncronos gracias a Next.js */
export const MainProducts = async () => {
  const products = await getProducts()
  console.log(products)

  return (
    <div>MainProducts</div>
  )
}
