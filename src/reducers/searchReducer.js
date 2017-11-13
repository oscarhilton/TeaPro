import {
  START_SEARCH,
  RETURN_SEARCH,
  UPDATE_SEARCH,
  CLEAR_SEARCH,
  END_SEARCH
} from '../actions/searchActions/types';

const INITIAL_STATE = {
  loading: false,
  searchText: '',
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
    case UPDATE_SEARCH:
      return {
        ...state,
        searchText: action.payload
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchText: '',
        results: []
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
