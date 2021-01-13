import counter from './counter';
import loggedIn from './loggedIn';
import {combineReducers} from 'redux';

const combinedReducers = combineReducers({
  counter,
  loggedIn
});

export default combinedReducers;
