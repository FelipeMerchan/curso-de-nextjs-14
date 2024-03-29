import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate"
import { cookies } from 'next/headers'

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies()
  const graphQLClient = GraphQLClientSingleton.getInstance().getClient()
  const { customerAccessTokenCreate }: {
    customerAccessTokenCreate: {
      customerAccessToken: {
        accessToken: string;
        expiresAt: string;
      }
    }
  } = await graphQLClient.request(customerAccessTokenCreateMutation, {
    email,
    password,
  })

  const { accessToken, expiresAt } = customerAccessTokenCreate.customerAccessToken

  if (accessToken) {
    cookiesStore.set('accessToken', accessToken, {
      expires: new Date(expiresAt),
      httpOnly: true,
      path: '/',
      sameSite: 'strict',
    })
  }

  return accessToken
}