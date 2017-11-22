import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import { updateAsync } from '../helpers';
import {
  CREATE_REVIEW,
  FETCH_REVIEWS,
  RETURN_TEA_REVIEWS,
  RETURN_SINGLE_REVIEW,
  RETURN_TEA_RATING,
  SUBMIT_COMMENT,
  UPVOTE_REVIEW
 } from './types';

export const fetchReviews = () => dispatch => {
  dispatch({ type: FETCH_REVIEWS });
};

export const returnTeaReviews = (teaId) => async dispatch => {
  const res = await axios.get(`${api}/api/teas/${teaId}/reviews/all`);
  dispatch({ type: RETURN_TEA_REVIEWS, payload: res.data });
};

export const returnTeaRating = (teaId) => async dispatch => {
  const res = await axios.get(`${api}/api/teas/${teaId}/reviews/rating`);
  dispatch({ type: RETURN_TEA_RATING, payload: res.data });
};

export const returnUserReviews = (userId) => async dispatch => {
  const res = await axios.get(`${api}/api/user/${userId}/reviews`);
  dispatch({ type: RETURN_TEA_REVIEWS, payload: res.data });
};

export const createReview = (userId, teaId, newReview) => async dispatch => {
  const res = await axios.post(`${api}/api/teas/${teaId}/reviews/add/${userId}`, { newReview });
  await updateAsync(String(teaId), {
    reviews: [...res.data.reviews],
    score: res.data.score
  });
  dispatch({ type: CREATE_REVIEW, payload: res.data });
};

export const upvoteReview = (reviewId) => async dispatch => {
  const res = await axios.get(`${api}/api/reviews/${reviewId}/upvote`);
  dispatch({ type: UPVOTE_REVIEW, payload: {} });
};

export const returnSinlgeReview = (reviewId) => async dispatch => {
  const res = await axios.get(`${api}/api/reviews/${reviewId}`);
  dispatch({ type: RETURN_SINGLE_REVIEW, payload: {} });
};

export const submitComment = (reviewId, comment, userId) => async dispatch => {
  const res = await axios.post(`${api}/api/reviews/${reviewId}/${comment}/comments/${userId}`);
  dispatch({ type: SUBMIT_COMMENT, payload: {} });
};
