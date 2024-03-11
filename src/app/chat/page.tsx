import { Chat } from "app/components/chat/Chat";
import { getProducts } from "app/services/shopify/products";
import { createAgent } from "app/utils/openai/createAgent";

export default async function ChatPage() {
  const productList = await getProducts()
  const productListTitles = productList?.map((product) => product.title)
  const flatProductTitles = productListTitles?.join(', ')
  const aiAgent = createAgent(flatProductTitles as string)

  return (
    <>
      <Chat aiAgent={aiAgent} />
    </>
  )
}