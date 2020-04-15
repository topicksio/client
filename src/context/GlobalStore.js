import React, { createContext, useReducer } from "react";
import DashboardReducer from "./GlobalReducer";
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
    { from: "jayjay", topic: "covid1919", id: 1 },
    { from: "jean", topic: "dbz", id: 2 },
    { from: "shay", topic: "the moon", id: 3 },
  ],
  topic_folder2: [
    { from: "jack", topic: "of all", id: 1 },
    { from: "nolienol", topic: "idk man", id: 2 },
    { from: "paul", topic: "hardware", id: 3 },
  ],
};

// Create context
export const GlobalContext = createContext(initState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DashboardReducer, initState);

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

  return (
    <GlobalContext.Provider value={{ topics: state, deleteTopic, addTopic }}>
      {children}
    </GlobalContext.Provider>
  );
};