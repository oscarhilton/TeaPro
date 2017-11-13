import {
  FETCH_USER,
  CHECK_ON_BOARDING,
  SUBMIT_ON_BOARDING,
  LOG_OUT_USER
} from '../actions/authActions/types';

const INITIAL_STATE = {
  loggedIn: false,
  onBoard: false
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
    default:
      return state;
  }
}
