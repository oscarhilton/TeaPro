import {
  LOAD_USER,
  DISPLAY_USER,
  FOLLOW_USER,
  UNFOLLOW_USER,
  MAKE_CHANGE
} from '../actions/userActions/types';

const INITIAL_STATE = {
  loading: false,
  userProfile: {}
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
  }
}
