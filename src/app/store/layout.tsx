import Link from "next/link"

import { ChatLink } from "app/components/store/ChatLink"
import { getCollections } from "app/services/shopify/collections"
import styles from './StoreLayout.module.sass'

export const runtime = 'edge'

export default async function Layout({ children }: { children: React.ReactNode}) {
  const collections = await getCollections()

  return (
    <main className={styles.StoreLayout}>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
            collections?.map((collection) => (
              <Link
                className={styles.StoreLayout__chip}
                key={collection.id}
                href={`store/${collection.handle}`}
              >
                {collection.title}
              </Link>
            ))
          }
        </ul>
        <ChatLink />
      </nav>
      {children}
    </main>
  )
}