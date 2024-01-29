import React from 'react'

import styles from './Description.module.sass'

export const Description = () => {
  return (
    <section className={styles.Description}>
      <img src="/images/description.jpeg" alt="Product marketplace" />
      <div>
        <h2>Description</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem similique nostrum doloribus atque obcaecati ratione nisi eum nulla error, officia, fugit possimus voluptas neque tempore architecto iste consectetur placeat sed.</p>
      </div>
    </section>
  )
}
