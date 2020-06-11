import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalStore";
import { Redirect } from 'react-router-dom'
import jwt from 'jwt-decode'


export const Callback = () => {
  const { state, fetchValid } = useContext(GlobalContext);
  const token = window.location.hash.slice(10)
  const user = jwt(token)
  
  const { preferred_username, sub, exp, email, email_verified, picture } = user

  fetchValid(preferred_username, sub, exp, email, email_verified, picture )

  return <Redirect to='/dashboard' />
}
