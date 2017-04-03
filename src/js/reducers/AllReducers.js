import { combineReducers } from 'redux'

import JobReducer from './JobReducer.js'

const AllReducers = combineReducers({
  jobs: JobReducer
});

export default AllReducers