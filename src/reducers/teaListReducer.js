import {
  GET_TEA_CATEGORIES
} from '../actions/types';

const INITIAL_STATE = {
  teas: {
    categories: []
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TEA_CATEGORIES:
      return {
        ...state,
        teas: {
          ...state.teas,
          categories: action.payload
        }
      };
    default:
      return state;
  }
}
