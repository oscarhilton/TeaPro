import {
  CREATE_REVIEW,
  FETCH_REVIEWS,
  RETURN_TEA_REVIEWS,
  RETURN_SINGLE_REVIEW,
  UPVOTE_REVIEW
} from '../actions/reviewsActions/types';

const INITIAL_STATE = {
  loading: false,
  reviews: [],
  chosenReview: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_REVIEWS:
      return {
        ...state,
        loading: true
      };
    case RETURN_TEA_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case RETURN_SINGLE_REVIEW:
      return {
        ...state,
        chosenReview: action.payload
      };
    case UPVOTE_REVIEW:
      return state;
    default:
      return state;
  }
}
