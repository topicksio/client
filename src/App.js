import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalStore";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000",
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
