export const removeJob = (id) => {
  console.log("This action is fired due to removing, gonna remove: ", id);

  return {
    type: "REMOVE_JOB",
    payload: id
  }
  
};