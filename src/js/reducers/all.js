import { combineReducers } from 'redux'

import jobReducer from './jobReducer'

const allReducers = combineReducers({
  jobs: jobReducer
});

export default allReducers