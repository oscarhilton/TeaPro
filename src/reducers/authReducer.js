import {
  FETCH_USER,
  CHECK_ON_BOARDING,
  SUBMIT_ON_BOARDING,
  LOG_OUT_USER
} from '../actions/authActions/types';

import {
  FOLLOW_USER,
  UNFOLLOW_USER,
} from '../actions/userActions/types';

import {
  REQUEST_DISCOVER_CATEGORIES,
  RETURN_DISCOVER_CATEGORIES
} from '../actions/teaActions/types';

const INITIAL_STATE = {
  loggedIn: false,
  onBoard: false,
  discover: {
    categories: {
      loading: false,
      list: []
    },
    moods: {
      loading: false,
      list: []
    }
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        ...action.payload || false
      };
    case CHECK_ON_BOARDING:
      return {
        ...state,
        onBoard: action.payload
      };
    case SUBMIT_ON_BOARDING:
      return {
        ...state,
        user: action.payload
      };
    case LOG_OUT_USER:
      return {
        ...state,
        loggedIn: false,
        user: null
      };
    case FOLLOW_USER:
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload]
        }
      };
    case REQUEST_DISCOVER_CATEGORIES:
      return {
        ...state,
        discover: {
          ...state.discover,
          categories: {
            ...state.discover.categories,
            loading: true
          }
        }
      };
    case RETURN_DISCOVER_CATEGORIES:
      return {
        ...state,
        discover: {
          ...state.discover,
          categories: {
            ...state.discover.categories,
            loading: false,
            list: action.payload
          }
        }
      };
    default:
      return state;
  }
}
