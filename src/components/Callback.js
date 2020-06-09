import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

export const Callback = () => {



  const accessToken = window.location.hash
  console.log(accessToken)


  return (
    <>
      <Redirect from='/callback' to='/dashboard' />
      {accessToken}
    </>
  )
}
