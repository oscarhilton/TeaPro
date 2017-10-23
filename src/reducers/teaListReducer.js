import {
  GET_TEA_CATEGORIES,
  REQUEST_TEAS
} from '../actions/types';

const INITIAL_STATE = {
  teas: {
    categories: []
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_TEAS:
      return {
        ...state,
        loading: true
      };
    case GET_TEA_CATEGORIES:
      return {
        ...state,
        loading: false,
        teas: {
          ...state.teas,
          categories: action.payload
        }
      };
    default:
      return state;
  }
}
