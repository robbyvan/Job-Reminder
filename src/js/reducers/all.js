import { combineReducers } from 'redux'

import jobReducer from './jobReducer.js'
import filteredJobs from './filteredJobsReducer.js'

const allReducers = combineReducers({
  jobs: jobReducer,
  filteredJobs: filteredJobs
});

export default allReducers