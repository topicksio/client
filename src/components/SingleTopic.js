import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";
import {  Card, Loader } from "semantic-ui-react";
import { AddTopic } from "./AddTopic";
import { Likes } from "./Likes";

const TOPICS_SUBSCRIPTION = gql`
  subscription topicsSubscription {
    users(where: {auth0_id: {_eq: "4444"}}) {
      auth0_id
      name
      topics_(order_by: {likes: desc}) {
        topic
        name
        parent_id
        likes
        id
      }
    }
  }
`;

export const SingleTopic = () => {
  //CTX store
  const { state } = useContext(GlobalContext);
  

  const { loading, error, data } = useSubscription(TOPICS_SUBSCRIPTION);

  if (loading) return <Loader active inline="centered" />;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="card-container">
      <Card.Group>

        {data.users[0].topics_.map((topic, i) => (

          <Card key={topic.id}>

            <Card.Content>
              <Card.Header>{topic.name}</Card.Header>
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
