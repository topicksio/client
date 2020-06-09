import React from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalStore";
import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import "./App.css";
import { Landing } from "./components/Landing";

const token = "";

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
          "x-hasura-admin-secret": ""
        },
      },
    })
  ),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <Router>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Router>
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default App;
