import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useQuery, useSubscription } from "@apollo/react-hooks";

import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";

import { getMainDefinition } from "apollo-utilities";

// // Create an http link:
// const httpLink = new HttpLink({
//   uri: "http://localhost:3000/graphql",
// });

// // Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   uri: `ws://topickshasura.herokuapp.com/v1/graphql`,
//   options: {
//     reconnect: true,
//   },
// });

// // using the ability to split links, you can send data to each link
// // depending on what kind of operation is being sent
// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

const TOPICS_SUBSCRIPTION = gql`
  subscription topicsSubscription {
    topics(order_by: { likes: desc }) {
      from
      id
      likes
      topic
    }
  }
`;

export const SingleTopic = (props) => {
  //CTX store
  const { state, deleteTopic, addTopic, addFolder } = useContext(GlobalContext);
  const TopicFolders = Object.keys(state);

  const { loading, error, data } = useSubscription(TOPICS_SUBSCRIPTION);
  
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="topic-container">
      <ul>
        
        {data.topics.map((topic, i) => (
          <li key={i}>
            Topic: {topic.topic} From: {topic.from} Likes: {topic.likes}
            <button onClick={() => deleteTopic()}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
