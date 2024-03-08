import { cookies } from 'next/headers'

import { customerName } from "app/graphql/queries/customerName"
import { GraphQLClientSingleton } from 'app/graphql'

export const validateAccessToken = async () => {
  try {
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get('accessToken')?.value
    const GraphQLClient = GraphQLClientSingleton.getInstance().getClient()
    const { customer }: { customer: any } = await GraphQLClient.request(customerName, {
      customerAccessToken: accessToken,
    })
  
    return customer
  } catch (error) {
    
  }
}