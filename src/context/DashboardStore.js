import React, { createContext, useReducer } from "react";
import DashboardReducer from "./DashboardReducer";
import io from "socket.io-client";


/*
  topic:
  {
    from: 'username',
    topic: 'topichere',
    topic_folder: 'foler name'
  }

  Dashboard State: 
  {
    topic-folder1:[
      {topic},{topic},{topic}
    ]
    topic-folder2:[
      {topic},{topic},{topic}
    ]
  }
*/

const initState = {
  topic_folder1: [
    { from: "jayjay", topic: "covid19" },
    { from: "jean", topic: "dbz" },
    { from: "shay", topic: "the moon" },
  ],
  topic_folder2: [
    { from: "jack", topic: "of all" },
    { from: "nolienol", topic: "idk man" },
    { from: "paul", topic: "hardware" },
  ],
};





// Create context
export const GlobalContext = createContext(initState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DashboardReducer, initState);
  
  return (
    <GlobalContext.Provider value={{ topics: state }}>
      {children}
    </GlobalContext.Provider>
  );
};
