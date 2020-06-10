import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from "../context/GlobalStore";
import { Route } from 'react-router-dom'
import { Landing } from "../components/Landing";
import axios from 'axios'


export const PrivateRoute = ({ component, ...options }) => {

  const accessToken = () => {
    const token = window.location.hash.slice(14).split('&')
    return token[0]
  }

  const { state, fetchValid } = useContext(
    GlobalContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://id.twitch.tv/oauth2/validate`, {
          headers: { Authorization: `OAuth ${accessToken()}` }
        })
        const { login, user_id, expires_in } = res.data
        
        fetchValid(login, user_id, expires_in)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  const finalComponent = state.isLoggedIn ? component : Landing
  console.log('privroute', state.isLoggedIn)
  return <Route {...options} component={finalComponent} />

}
