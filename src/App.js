import React from "react";
import {ApolloClient} from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalStore";
import { WebSocketLink } from "apollo-link-ws";
import {InMemoryCache} from 'apollo-cache-inmemory'
import "./App.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new WebSocketLink({
    uri: `wss://topickshasura.herokuapp.com/v1/graphql`,
    options: {
      reconnect: true,
      connectionParams: {},
    },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <Router>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Router>
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default App;
