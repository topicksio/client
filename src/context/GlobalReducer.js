export default (state, action) => {
  const { user, id, exp, email, email_verified, picture } = action.payload;

  switch (action.type) {
    case "FETCH_VALID":
      return {
        ...state,
        id,
        user,
        exp,
        isLoggedIn: true,
        email, 
        email_verified, 
        picture
      };
    case "IS_LOGGED_IN":
      return {
        ...state,
      };

    default:
      throw new Error();
  }
};
