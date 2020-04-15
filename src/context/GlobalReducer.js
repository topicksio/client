export default (state, action) => {
  const { topic_folder, id } = action.payload;
  
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
    default:
      throw new Error();
  }
};
