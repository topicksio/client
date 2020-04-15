import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";

export const TopicFolder = () => {
  //CTX store
  const { topics, deleteTopic, addTopic } = useContext(GlobalContext);
  const TopicFolders = Object.keys(topics);
  // console.log(topics);

  // local state
  const [activeFolder, changeActiveFolder] = useState(TopicFolders[0]);
  const [textValue, changeTextValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTopic(activeFolder, textValue, topics[activeFolder].length + 1); 
    changeTextValue("");
  };

  return (
    <>
      <div className="topic-folder-container">
        <h1 className="title">Dashboard</h1>
        <ul>
          {TopicFolders.map((topicF, i) => (
            <li onClick={(e) => changeActiveFolder(e.target.innerText)} key={i}>
              {topicF}
            </li>
          ))}
        </ul>
      </div>
      <div className="topic-folder-content">
        {activeFolder}
        <ul>
          {topics[activeFolder].map((singleTopic, i) => (
            <li key={i}>
              Topic: {singleTopic.topic} From: {singleTopic.from}{" "}
              <button onClick={() => deleteTopic(activeFolder, singleTopic.id)}>
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
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
    </>
  );
};
