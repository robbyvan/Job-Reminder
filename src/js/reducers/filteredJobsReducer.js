import { initialJobState } from './jobReducer.js'

const initialFilteredJobs = {
  filteredJobs: initialJobState,
  jobFilter: undefined
};

const filteredJobsReducer = (state = initialFilteredJobs, action)  => {

  // only filter is one of the valid filters, the filter will continue to process
  let validFilters = ["replied", "pending", "declined"];

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
        if (action.payload.jobFilter === undefined) {
          return {
            filteredJobs: action.payload.jobs,
            jobFilter: undefined
          }
        }
        //no such filter
        return {
          filteredJobs: [],
          jobFilter: false
        }
      }
      break;

    case "EDIT_JOB":
      state = {
        ...state,
        filteredJobs: state.filteredJobs.map((job) => {
          if (job.id === action.payload) {
            job = {...job, editing: true};
          }
          return job;
        })
      };
      break;

    case "REMOVE_JOB":
      // console.log("before:", state);
      state = {
        ...state,
        filteredJobs: state.filteredJobs.filter((job) => job.id !== action.payload)
      };
      // console.log("after:", state);
      break;

    case "SAVE_JOB":
      state = {
        ...state,
        filteredJobs: state.filteredJobs.map((job) => {
          return (job.id === action.payload.id)?
                  action.payload.detail:
                  job;
        })
      }
      break;
  }

  return state;

};

export default filteredJobsReducer