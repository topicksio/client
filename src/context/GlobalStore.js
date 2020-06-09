import React, { createContext, useReducer, useEffect } from "react";
import GlobalReducer from "./GlobalReducer";


const authData = {
  id:'145777948',
  user: 'l0tso',
  email: 'lotsoofficial@gmail.com',
  isLoggedIn:true,
  onAuthentication(){
    this.isLoggedIn = true
  },
  getLoginStatus() {
    return this.isLoggedIn
  }
};

// Create context
export const GlobalContext = createContext(authData);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, authData);




  //ACTIONS

  const deleteTopic = (topic_folder, id) => {
    dispatch({
      type: "DELETE_TOPIC",
      payload: { topic_folder, id },
    });
  };

  const addTopic = (topic_folder, topic, id) => {
    dispatch({
      type: "ADD_TOPIC",
      payload: { topic_folder, topic, id },
    });
  };

  const addFolder = (topic_folder) => {
    dispatch({
      type: "ADD_FOLDER",
      payload: { topic_folder },
    });
  };

  return (
    <GlobalContext.Provider value={{ state, deleteTopic, addTopic, addFolder }}>
      {children}
    </GlobalContext.Provider>
  );
};
