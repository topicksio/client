import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from "../context/GlobalStore";
import { Route } from 'react-router-dom'
import { Landing } from "../components/Landing";
import jwt from 'jwt-decode'
import axios from 'axios'



export const PrivateRoute = ({ component, ...options }) => {

  const { state, fetchValid } = useContext(
    GlobalContext
  );

  const finalComponent = state.isLoggedIn ? component : Landing
  
  return <Route {...options} component={finalComponent} />

}
