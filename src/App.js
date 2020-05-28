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

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkRiRlRuWXNfdG44V1pyVU1YaEZmSyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTA4OTI5NzAwNjQ3OTgwOTgwNTY0In0sImdpdmVuX25hbWUiOiJKZW51ZWwiLCJmYW1pbHlfbmFtZSI6Ik1lbmRleiIsIm5pY2tuYW1lIjoiamVudWVsLm1lbmRleiIsIm5hbWUiOiJKZW51ZWwgTWVuZGV6IiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSUJZclB0RXNkUjAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbkdPc2ZuS2RVY0hjTlNLdVhZREIxeDd3aGF3QS9waG90by5qcGciLCJsb2NhbGUiOiJlbiIsInVwZGF0ZWRfYXQiOiIyMDIwLTA1LTI3VDIwOjA4OjE5LjUwN1oiLCJpc3MiOiJodHRwczovL3RvcGlja3MuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA4OTI5NzAwNjQ3OTgwOTgwNTY0IiwiYXVkIjoiVGJIZEJuVVE1bFdBOW1lU3ZNajlrQ1dYbnBCZmpPZmQiLCJpYXQiOjE1OTA2MTAwOTksImV4cCI6MTU5MDY0NjA5OSwiYXRfaGFzaCI6IldzZmpBQkZtSkhZSE9TcXdTb1JmeEEiLCJub25jZSI6IlRnUWF3ZHdvczFKdzRSYkpQbm5QZlZzUFlzOHBocFllIn0.DSoGO2AC8zB7X2IJEvWEYG5U-abEk5dTE16Mf5Zoj1MZUIYsbj3ES-mZxcREeVwcZs9JA3jEfMRK_vlUM3OouHlWQ7zlUEPL_Ownz9Hz9I0r6Pr-XHEDVxng25SIAU2Nh0rOMMSYcIQW0t5JQnwOv4E_MCmsFvBB134qsiSSIcDr54jyupdXFtWfuhyE5-6oPNAGCWB5YyQBQyDuGTQSz1VASXxz_fJDWVwEehHxnEa6rUDymXE_RZKkSdVcPC8EKbDPUnetSWLAxGqX1tWe-dy-iBjWWg3W2ZVXlIcrituEnmyYAalvRQ2QB94BdcyNJ0y1HfguF1ErM4jjkGKTVQ";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new WebSocketLink(
    new SubscriptionClient(`wss://topickshasura.herokuapp.com/v1/graphql`, {
      reconnect: true,
      timeout: 30000,
      connectionParams: {
        headers: {
          Authorization: `Bearer ${token}`,
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
        </Router>
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default App;
