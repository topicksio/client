import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalStore";
import { Redirect } from 'react-router-dom'



export const Callback = () => {
  const { state, fetchValid } = useContext(
    GlobalContext
  );

  console.log(state.isLoggedIn)

  if (state.isLoggedIn === true) {
    return <Redirect to='/dashboard' />
  } else {
    return <Redirect to='/' />
  }
}
