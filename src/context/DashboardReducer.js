export default (state, action) => {
  const { topic_folder, id } = action.payload;
  switch (action.type) {
    case "DELETE_TOPIC":
      return {
        ...state,
        [topic_folder]: [...state[topic_folder], { from, topic }],
      };
    default:
      throw new Error();
  }
};