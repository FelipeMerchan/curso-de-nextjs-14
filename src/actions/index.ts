'use server'
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { createCartMutation } from "app/graphql/mutations/createCartMutation"

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  delete formDataObject['passwordConfirmation']
  const variables = {
    input: {
      ...formDataObject,
      phone: `+57${formDataObject.phone}`,
    }
  }
  const graphQLClient = GraphQLClientSingleton.getInstance().getClient()
  const { customerCreate }: {
    customerCreate: {
      customer: any,
      customerUserErrors: any,
    }
  } = await graphQLClient.request(createUserMutation, variables)
  const { customerUserErrors, customer } = customerCreate

  if (customer?.firstName) {
    await createAccessToken(formDataObject.email as string, formDataObject.password as string)
    redirect('/store')
  }
}

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)

  const accessToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string)

  if (accessToken) {
    redirect('/store')
  }
}

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = cookies()
  const accessToken = cookiesStore.get('accessToken')?.value as string

  if (!accessToken) redirect('/login')

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const customer = await validateAccessToken()
  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accessToken,
        email: customer?.email
      },
      lines: items.map(item => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity
      }))
    }
  }

  const { cartCreate }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string
      }
    }
  } = await graphqlClient.request(createCartMutation, variables)

  return cartCreate?.cart?.checkoutUrl
}
