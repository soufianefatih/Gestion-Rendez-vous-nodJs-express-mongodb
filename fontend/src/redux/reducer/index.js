// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import otherReducer from './otherReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  other: otherReducer,
  // add other reducers as needed
});

export default rootReducer;
