export default (state, action) => {
  const { from, topic, topic_folder } = action.payload;
  switch (action.type) {
    case "RECIEVE_TOPIC":
      return {
        ...state,
        [topic_folder]: [...state[topic_folder], { from, topic }],
      };
    default:
      throw new Error();
  }
};