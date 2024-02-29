'use server'
import { redirect } from "next/navigation"

import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"

/* Los server actions no regresan datos, por lo cual no podemos usar un
return para obtenerlo cuando invoquemos handleCreateUser: */
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
  const { customerCreate } = await graphQLClient.request(createUserMutation, variables)
  const { customerUserErrors, customer } = customerCreate

  if (customer?.firstName) {
    await createAccessToken(formDataObject.email as string, formDataObject.password as string)
    redirect('/store')
  }
}