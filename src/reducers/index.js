import { combineReducers } from 'redux';
import auth from './authReducer';
import teaList from './teaListReducer';
import cupboard from './cupboardReducer';
import wishlist from './wishlistReducer';
import nav from './navReducer';

export default combineReducers({
  auth,
  nav,
  teaList,
  cupboard,
  wishlist
});
