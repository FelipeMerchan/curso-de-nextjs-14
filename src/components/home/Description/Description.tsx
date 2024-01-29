import React from 'react'
import Image from 'next/image'

import styles from './Description.module.sass'

export const Description = () => {
  return (
    <section className={styles.Description}>
      <Image
        src="/images/description.jpeg"
        alt="Product marketplace"
        width="500"
        height="300"
        priority={false}
        quality={100}
      />
      <div>
        <h2>Description</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem similique nostrum doloribus atque obcaecati ratione nisi eum nulla error, officia, fugit possimus voluptas neque tempore architecto iste consectetur placeat sed.</p>
      </div>
    </section>
  )
}
