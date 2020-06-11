import React from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { GlobalProvider } from "./context/GlobalStore";
import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import "./App.css";
import { AppRouter } from "./routers/Router";

// const token = "";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new WebSocketLink(
    new SubscriptionClient(`wss://topickshasura.herokuapp.com/v1/graphql`, {
      reconnect: true,
      timeout: 30000,
      connectionParams: {
        headers: {
          // Authorization: `Bearer ${token}`,
          // SECRET IN NOTE.MD
          "x-hasura-admin-secret": "redfred44" //I know i shouldn't push this up to git but its fine for now
        },
      },
    })
  ),
});




function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default App;
