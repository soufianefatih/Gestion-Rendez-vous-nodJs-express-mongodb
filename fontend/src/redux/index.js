// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './reducer/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers go here
});

export default rootReducer;
