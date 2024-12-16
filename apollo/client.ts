import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.EXPO_PUBLIC_API_URL,
    fetchOptions: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  }),
  cache: new InMemoryCache(),
});

export default client;

/**
 * TODO: Need to implement refresh token logic
 * import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import AsyncStorage from "@react-native-async-storage/async-storage";
import refreshAuthToken from "./refreshAuthToken";

const httpLink = new HttpLink({ uri: "https://app-uat.com/graphql/" });

const authLink = new ApolloLink(async (operation, forward) => {
  const authToken = await AsyncStorage.getItem("authToken");

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: authToken ? `Bearer ${authToken}` : "",
    },
  }));

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions?.code === "UNAUTHENTICATED") {
        return refreshAuthToken(client).then((newToken) => {
          operation.setContext(({ headers = {} }) => ({
            headers: {
              ...headers,
              Authorization: `Bearer ${newToken}`,
            },
          }));
          return forward(operation);
        });
      }
    }
  }
});

const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

 * 
 */
