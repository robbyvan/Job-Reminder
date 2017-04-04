const UIInitialState = {
  hasPopUp: false
};

const UIReducer = (state = UIInitialState, action) => {
  switch (action.type) {
    case "TOGGLE_POPUP":
      state = {
        ...state,
        hasPopUp: !action.payload
      };
      break;
  }
  return state;
}

export default UIReducer