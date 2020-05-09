import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

export const AddTopic = () => {
  //CTX store
  const { state, deleteTopic, addTopicState, addFolder } = useContext(
    GlobalContext
  );
  const TopicFolders = Object.keys(state);
  // console.log(state);

  // local state
  const [activeFolder, changeActiveFolder] = useState(TopicFolders[0] || "");
  const [textValue, changeTextValue] = useState("");
  const [fromTextValue, changeFromTextValue] = useState("");
  const [folderTextValue, changeFolderTextValue] = useState("");

  const ADD_TOPIC = gql`
    mutation addTopic($id: String, $topic: TopicInput) {
      addTopic(id: String, topic: $TopicInput){
        id
        topic
        from
        likes
      }
    }
  `;

  const [addTopic] = useMutation(ADD_TOPIC);

  const onSubmit = (e) => {
    e.preventDefault();
    addTopic({
      variables: {
        id: "5eb4e50ce76d2134b0939293",
        topic: { topic: textValue, from: fromTextValue, likes: 48 },
      },
    });
    // addTopic(activeFolder, textValue, state[activeFolder].length + 1);
    changeTextValue("");
  };



  return (
    <div className="topic-submit">
      <form onSubmit={onSubmit}>
        <h2>topic</h2>
        <input
          type="text"
          value={textValue}
          onChange={(e) => changeTextValue(e.target.value)}
        />
        <h2>from</h2>
        <input
          type="text"
          value={fromTextValue}
          onChange={(e) => changeFromTextValue(e.target.value)}
        />

        <button>submit</button>
      </form>
    </div>
  );
};
