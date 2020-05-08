import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const SingleTopic = () => {
  const USERS_QUERY = gql`
    query users {
      users {
        id
        userId
        topics {
          id
          from
          topic
          likes
        }
      }
    }
  `;

  //CTX store
  const { state, deleteTopic, addTopic, addFolder } = useContext(GlobalContext);
  const TopicFolders = Object.keys(state);
  // console.log(state);

  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="topic-folder-content">
      <ul>
        {data.users[0].topics.map((topic, i) => (
          <li key={i}>
            Topic: {topic.topic} From: {topic.from} Likes: {topic.likes}
            <button onClick={() => deleteTopic()}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
