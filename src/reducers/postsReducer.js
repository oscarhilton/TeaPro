import {
  SUBMIT_POST,
  FETCH_HOT_POSTS,
  RETURN_HOT_POSTS,
  FETCH_FOLLOWER_POSTS,
  RETURN_FOLLOWER_POSTS
} from '../actions/postActions/types';

const INITIAL_STATE = {
  hot: {
    loading: null
  },
  followers: {
    loading: null
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_POST:
      return state;
    case FETCH_HOT_POSTS:
      return {
        ...state,
        hot: {
          loading: true
        }
      };
    case RETURN_HOT_POSTS:
      return {
        ...state,
        hot: {
          loading: false,
          list: action.payload
        }
      };
    case FETCH_FOLLOWER_POSTS:
      return {
        ...state,
        followers: {
          loading: true
        }
      };
    case RETURN_FOLLOWER_POSTS:
      return {
        ...state,
        followers: {
          loading: false,
          list: action.payload
        }
      }
    default:
      return state;
  }
}
