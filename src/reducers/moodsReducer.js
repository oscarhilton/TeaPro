import {
  FETCH_ALL_MOODS,
  RETURN_ALL_MOODS
} from '../actions/moodsActions/types';

const INITIAL_STATE = {
  moods: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_MOODS:
      return {
        ...state,
        loading: true
      };
    case RETURN_ALL_MOODS:
      return {
        ...state,
        loading: false,
        moods: action.payload
      };
    default:
      return state;
  }
}
