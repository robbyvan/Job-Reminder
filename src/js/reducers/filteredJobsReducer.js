const initialFilteredJobs = {
  filteredJobs: [],
  jobFilter: false
};

const filteredJobsReducer = (state = initialFilteredJobs, action)  => {

  // only filter is one of the valid filters, the filter will continue to process
  let validFilters = ["replied", "pending", "decliened"];

  switch (action.type) {

    case "FILTER_JOBS":
      // If the filter is the same with last state, no need to filter jobs
      if (action.payload.jobFilter === state.jobFilter){
        console.log("filter does not change");
        return state;
      }
      //Chech if it is a valid filter, if so, filter jobs and change state
      if (validFilters.indexOf(action.payload.jobFilter) !== -1){
        return {
          filteredJobs: action.payload.jobs.filter((job) => 
                          job.status.toLowerCase() === action.payload.jobFilter.toLowerCase()
                        ),
          jobFilter: action.payload.jobFilter
        }
      } else {
        //no such filter
        return {
          filteredJobs: [],
          jobFilter: false
        }
      }
      break;
  }

  return state;

};

export default filteredJobsReducer