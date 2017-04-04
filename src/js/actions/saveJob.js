export const saveJob = (id, jobDetail) => {
  console.log("This action is fired due to saving, gonna modify: ", id, jobDetail);

  return {
    type: "SAVE_JOB",
    payload: {
      id: id,
      detail: jobDetail
    }
  }
  
};