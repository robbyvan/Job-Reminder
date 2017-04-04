export const addJob = (id, jobDetail) => {
  console.log("This action is fired due to adding, gonna add: ", id, jobDetail);

  return {
    type: "ADD_JOB",
    payload: {
      id: id,
      detail: jobDetail
    }
  }
  
};