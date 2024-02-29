import Link from "next/link"

import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import styles from './Header.module.sass'

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/store">
              Tienda
            </Link>
          </li>
          <li>
            {customer?.firstName ? (<span>Hola, {customer?.firstName}</span>) : (<Link href='/login'>Login</Link>)}
          </li>
        </ul>
      </nav>
    </header>
  )
}