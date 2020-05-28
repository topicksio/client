import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";
import { Button, Card, Icon, Label, Loader } from "semantic-ui-react";
import { AddTopic } from "./AddTopic";
import { Likes } from "./Likes";

const TOPICS_SUBSCRIPTION = gql`
  subscription topicsSubscription {
    topics(order_by: { likes: desc }) {
      user_id
      id
      likes
      topic
    }
  }
`;

export const SingleTopic = () => {
  //CTX store
  const { state, deleteTopic, addTopic, addFolder } = useContext(GlobalContext);
  const TopicFolders = Object.keys(state);

  const { loading, error, data } = useSubscription(TOPICS_SUBSCRIPTION);

  if (loading) return <Loader active inline="centered" />;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="card-container">
      <Card.Group>
        {data.topics.map((topic, i) => (
          <Card key={topic.id}>
            <Card.Content>
              <Card.Header>{topic.user_id}</Card.Header>
              <Card.Description>
                <strong>{topic.topic}</strong>
              </Card.Description>
              <Likes topic={topic} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <AddTopic />
    </div>
  );
};
