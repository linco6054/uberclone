export const reducer = (state, action) => {
  if (action.type === "NotLoading") {
    return {
      ...state,
      loading: false,
    };
  }
  if (action.type === "UpdateUser") {
    return {
      ...state,
      currentUserInfo: action.payload,
    };
  }
  if (action.type === "RemoveErrpr") {
    return {
      ...state,
      error: "",
    };
  }
  if (action.type === "AddMessage") {
    return {
      ...state,
      message: action.payload,
    };
  }
  if (action.type === "RemoveMessage") {
    return {
      ...state,
      message: "",
    };
  }
  if (action.type === "AddError") {
    return {
      ...state,
      error: action.payload,
    };
  }
};
