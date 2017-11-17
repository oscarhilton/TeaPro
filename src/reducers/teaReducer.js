import {
  FETCH_TEA_DETAILS,
  MAKE_CURRENT_TEA
} from '../actions/teaActions/types';

const INITIAL_STATE = {
  loaded: false,
  currentTea: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TEA_DETAILS:
      return {
        ...state,
        loaded: false,
        currentTea: {}
      };
    case MAKE_CURRENT_TEA:
      return {
        ...state,
        loaded: true,
        currentTea: action.payload
      };
    default:
      return state;
  }
}
