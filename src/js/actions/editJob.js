export const editJob = (key) => {
  console.log("This action is fired due to editing job, gonna modify: ", key);

  return {
    type: "EDIT_JOB",
    payload: key
  }
  
};