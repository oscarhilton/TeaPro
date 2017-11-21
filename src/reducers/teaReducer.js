import {
  FETCH_TEA_DETAILS,
  MAKE_CURRENT_TEA
} from '../actions/teaActions/types';

import {
  CREATE_REVIEW
} from '../actions/reviewsActions/types';

const INITIAL_STATE = {
  loaded: false,
  currentTea: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TEA_DETAILS:
      return {
        ...state,
        loaded: false
      };
    case MAKE_CURRENT_TEA:
      return {
        ...state,
        loaded: true,
        currentTea: action.payload
      };
    case CREATE_REVIEW:
      return {
        ...state,
        loaded: true,
        currentTea: {
          ...state.currentTea,
          score: action.payload.score,
          reviews: action.payload.reviews
        }
      };
    default:
      return state;
  }
}
