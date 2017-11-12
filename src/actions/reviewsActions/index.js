import axios from 'axios';
import { api } from '../../api';
import {
  CREATE_REVIEW,
  FETCH_REVIEWS,
  RETURN_TEA_REVIEWS,
  RETURN_SINGLE_REVIEW,
 } from './types';

export const fetchReviews = () => dispatch => {
  dispatch({ type: FETCH_REVIEWS });
};

export const returnTeaReviews = (teaId) => async dispatch => {
  const res = await axios.get(`${api}/api/teas/${teaId}/reviews`);
  dispatch({ type: RETURN_TEA_REVIEWS, payload: {} });
};

export const returnUserReviews = (userId) => async dispatch => {
  const res = await axios.get(`${api}/api/user/${userId}/reviews`);
  dispatch({ type: RETURN_TEA_REVIEWS, payload: {} });
};

export const returnSinlgeReview = (reviewId) => async dispatch => {
  const res = await axios.get(`${api}/api/reviews/${reviewId}`);
  dispatch({ type: RETURN_SINGLE_REVIEW, payload: {} });
};

export const createReview = (newReview) => async dispatch => {
  const res = await axios.post(`${api}/api/reviews/create`, newReview);
  dispatch({ type: CREATE_REVIEW, payload: {} });
};
