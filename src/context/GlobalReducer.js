export default (state, action) => {
  const { topic_folder, id } = action.payload;
  console.log(topic_folder);
  switch (action.type) {
    case "DELETE_TOPIC":
      return {
        ...state,
        [topic_folder]: state[topic_folder].filter((topic) => topic.id !== id),
      };
    case "ADD_TOPIC":
      return {
        ...state,
        [topic_folder]: [...state[topic_folder], action.payload],
      };
    case "ADD_FOLDER":
      return {
        ...state,
        [topic_folder]: [],
      };
    default:
      throw new Error();
  }
};
