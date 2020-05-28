import React, { useState, useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Button, Card, Icon, Label, Loader } from "semantic-ui-react";

const ADD_LIKES = gql`
  mutation AddLikes($id: Int, $likes: Int) {
    update_topics(where: { id: { _eq: $id } }, _inc: { likes: $likes }) {
      returning {
        id
        topic
        likes
        user_id
      }
    }
  }
`;

export const Likes = ({ topic }) => {
  const buttonRef = useRef();
  const [addLikes] = useMutation(ADD_LIKES);
  const [likesNum, changeLikesNum] = useState(0);
  const [active, changeActive] = useState(false);

  return (
    <>
      <Button as="div"  labelPosition="right" floated="right" ref={buttonRef}>
        <Button
          color="white"
          toggle
          active={active}
          size="mini"
          onClick={(e) => {
            changeActive((prevState) => !prevState);
            addLikes({
              variables: { id: topic.id, likes: active ? -1 : 1 },
            });
          }}
        >
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic  color="white" pointing="left">
          {topic.likes}
        </Label>
      </Button>
    </>
  );
};

