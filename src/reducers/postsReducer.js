import {
  SUBMIT_POST,
  FETCH_HOT_POSTS,
  RETURN_HOT_POSTS
} from '../actions/postActions/types';

const INITIAL_STATE = {
  loading: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_POST:
      return state;
    case FETCH_HOT_POSTS:
      return {
        ...state,
        loading: true
      }
    case RETURN_HOT_POSTS:
      return {
        ...state,
        loading: false,
        hot: [...action.payload]
      }
    default:
      return state;
  }
}
