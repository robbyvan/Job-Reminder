export const filterJobs = (jobs, jobFilter) => {
  console.log("This action is fired due to route changing, route params: ", jobFilter);

  return {
    type: "FILTER_JOBS",
    payload: {
      jobs: jobs, 
      jobFilter: jobFilter
    }
  }
  
};