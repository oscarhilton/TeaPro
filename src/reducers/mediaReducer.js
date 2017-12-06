import {
  FETCH_USER_IMAGES,
  RETURN_USER_IMAGES
} from '../actions/mediaActions/types';

const INITIAL_STATE = {
  loading: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_IMAGES:
      return {
        ...state,
        loading: true
      };
    case RETURN_USER_IMAGES:
      return {
        ...state,
        loading: false,
        userImages: []
      };
    default:
      return state;
  }
}
