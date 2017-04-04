import { combineReducers } from 'redux'

import jobReducer from './jobReducer.js'
import filteredJobsReducer from './filteredJobsReducer.js'

const allReducers = combineReducers({
  jobs: jobReducer,
  filteredJobsInfo: filteredJobsReducer
});

export default allReducers