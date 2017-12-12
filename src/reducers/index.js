import { combineReducers } from 'redux';
import auth from './authReducer';
import nav from './navReducer';
import search from './searchReducer';
import categories from './categoriesReducer';
import cupboard from './cupboardReducer';
import wishlist from './wishlistReducer';
import moods from './moodsReducer';
import teas from './teaReducer';
import users from './userReducer';
import media from './mediaReducer';
import notifications from './notificationReducer';

export default combineReducers({
  auth,
  nav,
  search,
  categories,
  cupboard,
  wishlist,
  moods,
  teas,
  users,
  media,
  notifications
});
