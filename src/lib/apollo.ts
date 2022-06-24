import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rtxz321mif01z6g4zwbgiz/master',
  cache: new InMemoryCache()
})