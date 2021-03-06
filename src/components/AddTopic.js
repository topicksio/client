import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Button, Modal, Input, Form } from "semantic-ui-react";

export const AddTopic = () => {
  //CTX store
  const { state } = useContext(
    GlobalContext
  );
  // const TopicFolders = Object.keys(state);

  // local state


  const ADD_TOPIC = gql`
    mutation AddTopic($name: String, $topic: String, $parentId: String) {
      insert_topics(objects: {name: $name, topic: $topic, parent_id: $parentId}) {
        returning {
          id
        }
      }
    }
  `;

  const [newTopic, changeNewTopic] = useState("");
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
                    variables: { name: "lotso", topic: newTopic, parentId: "4444" },
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
