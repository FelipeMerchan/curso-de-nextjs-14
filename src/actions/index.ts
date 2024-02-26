'use server'

import { GraphQLClientSingleton } from "app/graphql"

import { createUserMutation } from "app/graphql/mutations/createUserMutation"

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
  const data = await graphQLClient.request(createUserMutation, variables)
  console.log({ data })
}