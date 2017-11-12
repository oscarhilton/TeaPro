import { combineReducers } from 'redux';
import auth from './authReducer';
import nav from './navReducer';
import search from './searchReducer';
import categories from './categoriesReducer';
import cupboard from './cupboardReducer';
import wishlist from './wishlistReducer';
import moods from './moodsReducer';

export default combineReducers({
  auth,
  nav,
  search,
  categories,
  cupboard,
  wishlist,
  moods
});
