import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Button, Modal, Input, Form } from "semantic-ui-react";

export const AddTopic = () => {
  //CTX store
  const { state, deleteTopic, addTopicState, addFolder } = useContext(
    GlobalContext
  );
  const TopicFolders = Object.keys(state);

  // local state
  const [activeFolder, changeActiveFolder] = useState(TopicFolders[0] || "");
  const [textValue, changeTextValue] = useState("");
  const [fromTextValue, changeFromTextValue] = useState("");
  const [folderTextValue, changeFolderTextValue] = useState("");

  const ADD_TOPIC = gql`
    mutation AddTopic($from: String, $topic: String) {
      insert_topics(objects: { from: $from, topic: $topic }) {
        returning {
          id
        }
      }
    }
  `;

  const [newTopic, changeNewTopic] = useState("");
  const [modalOpen, changeModalOpen] = useState(false);
  const [addTopic] = useMutation(ADD_TOPIC);

  const handleChange = (e) => {
    changeNewTopic(e.target.value);
  };

  return (
    <>
      <Modal
        trigger={
          <Button
            circular
            color="blue"
            size="large"
            icon="plus"
            // onClick={changeModalOpen(true)}
          />
        }
        // open={modalOpen}
        // onClose={changeModalOpen(false)}
      >
        <Modal.Header>Add a Topic</Modal.Header>
        <Modal.Content image>
          <Form>
            <Form.Field>
              <Input
                value={newTopic}
                onChange={handleChange}
                placeholder="Add a topic..."
                floated="right"
              />
            </Form.Field>
            <Modal.Actions>
              <Button
                icon="plus"
                onClick={() => {
                  addTopic({
                    variables: { from: "lotso", topic: newTopic },
                  });
                  changeNewTopic("");
                  // changeModalOpen(false);
                }}
              />
            </Modal.Actions>
          </Form>
        </Modal.Content>

        <Modal.Description></Modal.Description>
      </Modal>
    </>
    // <div className="topic-submit">
    //   <form onSubmit={onSubmit}>
    //     <h2>topic</h2>
    //     <input
    //       type="text"
    //       value={textValue}
    //       onChange={(e) => changeTextValue(e.target.value)}
    //     />
    //     <h2>from</h2>
    //     <input
    //       type="text"
    //       value={fromTextValue}
    //       onChange={(e) => changeFromTextValue(e.target.value)}
    //     />

    //     <button>submit</button>
    //   </form>
    // </div>
  );
};
