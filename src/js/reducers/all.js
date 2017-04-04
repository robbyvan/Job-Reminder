import { combineReducers } from 'redux'

import jobReducer from './jobReducer.js'
import filteredJobsReducer from './filteredJobsReducer.js'
import UIReducer from './UIReducer.js'

const allReducers = combineReducers({
  jobs: jobReducer,
  filteredJobsInfo: filteredJobsReducer,
  UIReducer: UIReducer
});

export default allReducers