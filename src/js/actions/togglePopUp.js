export const togglePopUp = (hasPopUp) => {
  console.log("This action is fired due to toggle pop up, has pop up?", hasPopUp);

  return {
    type: "TOGGLE_POPUP",
    payload: hasPopUp
  }
}

