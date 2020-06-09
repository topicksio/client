import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalStore";
import { Route } from 'react-router-dom'
import { Landing } from "../components/Landing";


export const PrivateRoute = ({ component, ...options }) => {

  const { state } = useContext(GlobalContext);
  const finalComponent = state.isLoggedIn ? component : Landing

  return <Route {...options} component={finalComponent} />

}
