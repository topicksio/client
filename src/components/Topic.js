import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const USERS_QUERY = gql`
  query {
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

export const TopicFolder = () => {
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

  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="topic-folder-container">
        <h1 className="title">Dashboard</h1>
        {console.log(data.users[0].topics)}
      </div>
      <div className="topic-folder-content">
        <ul>
          {data.users[0].topics.map((topic, i) => (
            
            <li key={i}>
              
              Topic: {topic.topic} From: {topic.from}
              <button onClick={() => deleteTopic(activeFolder, topic.id)}>
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


// {activeFolder}
//         <ul>
//           {(state[activeFolder] || []).map((singleTopic, i) => (
//             <li key={i}>
//               Topic: {singleTopic.topic} From: {singleTopic.from}
//               <button onClick={() => deleteTopic(activeFolder, singleTopic.id)}>
//                 DELETE
//               </button>
//             </li>
//           ))}
//         </ul>