import { combineReducers } from 'redux';
import auth from './authReducer';
import teaList from './teaListReducer';

export default combineReducers({
  auth,
  teaList
});
