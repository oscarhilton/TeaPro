import {
  CONNECTION_SUCCESS,
  CONNECTION_FAILURE
} from '../actions/connectionActions/types';

const INITIAL_STATE = {
  connected: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONNECTION_SUCCESS:
      return {
        connected: true
      };
    case CONNECTION_FAILURE:
      return {
        connected: false
      };
    default:
      return state;
  }
}
