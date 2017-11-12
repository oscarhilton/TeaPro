import {
  START_SEARCH,
  RETURN_SEARCH,
  END_SEARCH
} from '../actions/searchActions/types';

const INITIAL_STATE = {
  loading: false,
  results: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_SEARCH:
      return {
        ...state,
        loading: true
      };
    case RETURN_SEARCH:
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    case END_SEARCH:
      return {
        ...state,
        loading: false,
        results: []
      };
    default:
      return state;
  }
}
