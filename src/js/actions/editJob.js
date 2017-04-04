export const editJob = (id) => {
  console.log("This action is fired due to editing, gonna modify: ", id);

  return {
    type: "EDIT_JOB",
    payload: id
  }
  
};