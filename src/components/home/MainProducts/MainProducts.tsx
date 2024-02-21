import React from 'react'
import Image from 'next/image'

import styles from './MainProducts.module.sass'
import { Product } from 'app/models/products'

/* Los server component pueden ser asíncronos gracias a Next.js */
export const MainProducts = async () => {
  const response = await fetch('http://localhost:3000/api')
  const { products }: { products: Product[]} = await response.json()

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product) => {
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
