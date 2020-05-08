import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

export const AddTopic = () => {
  const ADD_TOPIC = gql`
    mutation addTopic {
      addTopic(
        id: "5eb4e50ce76d2134b0939293"
        topic: { topic: "7777777777", from: "PogU", likes: 48 }
      ) {
        id
        topic
        from
        likes
      }
    }
  `;

  //CTX store
  const { state, deleteTopic, addTopic, addFolder } = useContext(GlobalContext);
  const TopicFolders = Object.keys(state);
  // console.log(state);

  // local state
  const [activeFolder, changeActiveFolder] = useState(TopicFolders[0] || "");
  const [textValue, changeTextValue] = useState("");
  const [folderTextValue, changeFolderTextValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTopic(activeFolder, textValue, state[activeFolder].length + 1);
    changeTextValue("");
  };

  const onSubmitFolder = (e) => {
    e.preventDefault();
    addFolder(folderTextValue);
    changeFolderTextValue("");
  };

  return (
    <div className="topic-submit">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={textValue}
          onChange={(e) => changeTextValue(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
