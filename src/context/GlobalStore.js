import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";


const authData = {
  id:'',
  user: '',
  email: '',
  exp: '',
  isLoggedIn:false,
};

// Create context
export const GlobalContext = createContext(authData);

// Provider component
export const GlobalProvider = ({ children }) => {

  
  const [state, dispatch] = useReducer(GlobalReducer, authData);




  //ACTIONS

  const fetchValid = (user, id, exp) => {
    dispatch({
      type: "FETCH_VALID",
      payload: { exp, user, id },
    });
  };

  const changeLoginState = (auth) => {
    dispatch({
      type: "IS_LOGGED_IN",
      payload: {auth}
    })
  }


  return (
    <GlobalContext.Provider value={{ state, fetchValid }}>
      {children}
    </GlobalContext.Provider>
  );
};
