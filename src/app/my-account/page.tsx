import { getCustomerOrders } from "app/services/shopify/graphql/customer";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
  const customer = await validateAccessToken()
  const ordersData = await getCustomerOrders()
  console.log({ ordersData })

  return (
    <div>
      <h1>Bienvenido {customer.name}</h1>
      <h1>Email: {customer.email}</h1>
    </div>
  );
}