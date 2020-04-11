import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/DashboardStore";

export const TopicFolder = () => {
  //CTX store
  const { topics } = useContext(GlobalContext);
  const TopicFolders = Object.keys(topics)



  // local state
  const [activeFolder, changeActiveFolder] = useState(TopicFolders[0]);
  const [textValue, changeTextValue] = useState("");

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
              Topic: {singleTopic.topic} From: {singleTopic.from}
            </li>
          ))}
        </ul>
      </div>
      <div className="topic-submit">
        <input
          type="text"
          value={textValue}
          onChange={(e) => changeTextValue(e.target.value)}
        />
        <button
          onClick={() => {
            // sendTopicAction({
            //   from: user,
            //   topic: textValue,
            //   topic_folder: activeFolder,
            // });
            changeTextValue("");
          }}
        >
          submit
        </button>
      </div>
    </>
  );
};
