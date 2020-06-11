import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";


const authData = {
  id: '',
  user: '',
  email: '',
  exp: '',
  isLoggedIn: false,
  email_verified: false,
  picture: ''
};

// Create context
export const GlobalContext = createContext(authData);

// Provider component
export const GlobalProvider = ({ children }) => {


  const [state, dispatch] = useReducer(GlobalReducer, authData);

  


  //ACTIONS

  const fetchValid = (user, id, exp, email, email_verified, picture) => {
    dispatch({
      type: "FETCH_VALID",
      payload: { exp, user, id, email, email_verified, picture },
    });
  };

  const changeLoginState = (auth) => {
    dispatch({
      type: "IS_LOGGED_IN",
      payload: { auth }
    })
  }


  return (
    <GlobalContext.Provider value={{ state, fetchValid }}>
      {children}
    </GlobalContext.Provider>
  );
};
