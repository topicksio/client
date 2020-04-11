import React from "react";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { GlobalProvider } from "./context/DashboardStore";
import "./App.css";

function App() {
  
  return (
    <GlobalProvider>
      <Router>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Router>
    </GlobalProvider>
  );
}

export default App;
