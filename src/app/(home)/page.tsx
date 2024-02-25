import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

/* Static Metadata: podemos agregar meta datos de SEO en páginas con rutas
estáticas exportando la siguiente variable en el componente página: */
export const metadata: Metadata = {
  title: 'Future World',
  description: 'Welcome to the future world, an e-commerce from other century',
  keywords: ['e-commerce', 'future', 'technology'],
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
