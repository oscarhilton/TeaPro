import {
  LOAD_USER,
  DISPLAY_USER,
  FOLLOW_USER,
  UNFOLLOW_USER,
  MAKE_CHANGE,
  FETCH_USER_CUPBOARD_TEAS,
  RETURN_USER_CUPBOARD_TEAS,
  FETCH_USER_WISHLIST_TEAS,
  RETURN_USER_WISHLIST_TEAS,
  FETCH_USER_LIST,
  RETURN_USER_LIST
} from '../actions/userActions/types';

const INITIAL_STATE = {
  loading: null,
  userList: {
    loading: null
  },
  userProfile: {},
  cupboard: {
    loading: null
  },
  wishlist: {
    loading: null
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        loading: true
      };
    case DISPLAY_USER:
      return {
        ...state,
        loading: false,
        userProfile: action.payload
      };
    case FETCH_USER_CUPBOARD_TEAS:
      return {
        ...state,
        cupboard: {
          loading: true
        }
      };
    case RETURN_USER_CUPBOARD_TEAS:
      return {
        ...state,
        cupboard: {
          loading: false,
          teas: action.payload
        }
      };
    case FETCH_USER_WISHLIST_TEAS:
      return {
        ...state,
        wishlist: {
          loading: true
        }
      };
    case RETURN_USER_WISHLIST_TEAS:
      return {
        ...state,
        wishlist: {
          loading: false,
          teas: action.payload
        }
      };
    case FETCH_USER_LIST:
      return {
        ...state,
        userList: {
          ...state.userList,
          loading: true
        }
      };
    case RETURN_USER_LIST:
      return {
        ...state,
        userList: {
          ...state.userList,
          loading: false,
          list: action.payload
        }
      };
    default:
      return state;
  }
}
