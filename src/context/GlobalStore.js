import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import io from "socket.io-client";
import { stringify } from "querystring";

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
  
};

// Create context
export const GlobalContext = createContext(initState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initState);

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
