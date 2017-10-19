import { combineReducers } from 'redux';
import auth from './authReducer';
import teaList from './teaListReducer';
import nav from './navReducer';

export default combineReducers({
  auth,
  nav,
  teaList
});
