export default (state, action) => {
  const { user, id, exp } = action.payload;

  switch (action.type) {
    case "FETCH_VALID":
      console.log(user)
      return {
        ...state,
        id,
        user,
        exp,
        isLoggedIn: true
      };
    case "IS_LOGGED_IN":
      return {
        ...state,
      };

    default:
      throw new Error();
  }
};
