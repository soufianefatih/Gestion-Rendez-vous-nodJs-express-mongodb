// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // for handling async actions
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
