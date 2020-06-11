import React from 'react'

import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Landing } from "../components/Landing";
import { Callback } from "../components/Callback";
import { PrivateRoute } from './PrivateRoute';



export const AppRouter = () => {

  

  return (
    <>
     
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/callback" component={Callback} />
        </Switch>
      </Router>
    </>
  )
}
