import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://nodegraphql-tog7.onrender.com',
    cache: new InMemoryCache()
})