import {
  FETCH_USER,
  GET_CUPBOARD_TEAS,
  ADD_TEA_TO_CUPBOARD
 } from '../actions/types';

const INITIAL_STATE = {
  loggedIn: false,
  user: null,
  cupboard: {
    loaded: false,
    list: []
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loggedIn: true,
        user: action.payload || false
      };
    case GET_CUPBOARD_TEAS:
      console.log(state);
      return {
        ...state,
        cupboard: {
          loaded: true,
          list: action.payload
        }
      };
    default:
      return state;
  }
}
