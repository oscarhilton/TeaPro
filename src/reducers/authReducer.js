import {
  FETCH_USER,
 } from '../actions/types';

const INITIAL_STATE = {
  loggedIn: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
