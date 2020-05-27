import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";
import { Button, Card, Icon, Label, Loader } from "semantic-ui-react";
import { AddTopic } from "./AddTopic";

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

  if (loading) return <Loader active inline="centered" />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Card.Group>
        {data.topics.map((topic, i) => (
          <Card>
            <Card.Content>
              {/* <Image
                floated="right"
                size="mini"
                src={require("../assets/4.png")}
              /> */}
              <Card.Header>{topic.from}</Card.Header>
              <Card.Description>
                <strong>{topic.topic}</strong>
              </Card.Description>
              <Button as="div" labelPosition="right" floated="right">
                <Button color="blue" basic size="mini">
                  <Icon name="heart" />
                  Like
                </Button>
                <Label as="a" basic color="blue" pointing="left">
                  {topic.likes}
                </Label>
              </Button>

              {/* <button onClick={() => deleteTopic()}>DELETE</button> */}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <AddTopic />
    </>
  );
};
