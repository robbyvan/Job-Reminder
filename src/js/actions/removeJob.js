export const removeJob = (key) => {
  console.log("This action is fired due to removing job, gonna remove: ", key);

  return {
    type: "REMOVE_JOB",
    payload: key
  }
  
};