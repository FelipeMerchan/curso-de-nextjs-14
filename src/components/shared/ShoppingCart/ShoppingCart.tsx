'use client'
import { FaShoppingCart } from "react-icons/fa"

import { useShoppingCart } from "app/hooks/useShoppingCart"
import styles from './ShoppingCart.module.sass'
import { useMemo, useState } from "react"
import { ShoppingCartItem } from "./ShoppingCartItem"

export const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useShoppingCart()
  const [isBuying, setIsBuying] = useState(false);
  const hasItems = useMemo(() => cart.length > 0, [cart]);

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(prevState => !prevState)
    }
  }

  return (
    <div className={styles.ShoppingCart}>
      {
        hasItems && (
          <span className={styles.ShoppingCart__counter}>
            {cart.length}
          </span>
        )
      }
      <button className={styles.ShoppingCart__cart} onClick={handleOpen}>
        <FaShoppingCart />
      </button>
      {isOpen && hasItems && (
        <div className={styles.ShoppingCart__items} >
          {
            cart.map(item => (<ShoppingCartItem key={item.id} item={item} />))
          }
          <button className={styles.ShoppingCart__buyButton} disabled={isBuying}>
            Buy
          </button>
        </div>
      )}
    </div>
  )
}
