import React from 'react'
import Image from 'next/image'

import styles from './MainProducts.module.sass'
import { getMainProducts } from 'app/services/shopify/products'

/* Los server component pueden ser asíncronos gracias a Next.js */
export const MainProducts = async () => {
  const productList = await getMainProducts()

  return (
    <section className={styles.MainProducts}>
      <h3>✨ ¡Nuevos productos lanzados!</h3>
      <div className={styles.MainProducts__grid}>
        {productList?.map((product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          )
        })}
      </div>
    </section>
  )
}
