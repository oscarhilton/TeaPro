import { combineReducers } from 'redux';
import auth from './authReducer';
import categories from './categoriesReducer';
import cupboard from './cupboardReducer';
import wishlist from './wishlistReducer';
import nav from './navReducer';
import moods from './moodsReducer';

export default combineReducers({
  auth,
  nav,
  categories,
  cupboard,
  wishlist,
  moods
});
