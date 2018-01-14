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

import { failedConnection } from '../connectionActions';
import { uploadAnImage } from '../mediaActions';

export const fetchReviews = () => dispatch => {
  dispatch({ type: FETCH_REVIEWS });
};

export const returnTeaReviews = (teaId) => async dispatch => {
  const res = await axios.get(`${api}/api/teas/${teaId}/reviews/all`);
  if (res && res.status === 200) {
    dispatch({ type: RETURN_TEA_REVIEWS, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
};

export const returnTeaRating = (teaId) => async dispatch => {
  const res = await axios.get(`${api}/api/teas/${teaId}/reviews/rating`);
  if (res && res.status === 200) {
    dispatch({ type: RETURN_TEA_RATING, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
};

export const returnUserReviews = (userId) => async dispatch => {
  const res = await axios.get(`${api}/api/user/${userId}/reviews`);
  if (res && res.status === 200) {
    dispatch({ type: RETURN_TEA_REVIEWS, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
};

export const createReview = (userId, teaId, newReview) => async dispatch => {
  // console.log(newReview, '<--- NEW REVIEW');
  const { image, user } = newReview;
  console.log(image);
  if (image) {
    console.log(true)
  } else {
    console.log(false)
  }
  let imageUpload = null;
  if (image) {
    uploadAnImage(image, user, async (resultImage) => {
      console.log(res);
      const res = await axios.get(`${api}/api/teas/${teaId}/reviews/add/${userId}`, { newReview, imageUpload: resultImage._id  });
      console.log(res, '<<<<< new review res!!!');
    });
  }
  // console.log(imageUpload);
  // const res = await axios.get(`${api}/api/teas/${teaId}/reviews/add/${userId}`, { newReview, imageUpload  });
  // console.log(res, '<<<<< new review res!!!');

};

export const upvoteReview = (reviewId) => async dispatch => {
  const res = await axios.get(`${api}/api/reviews/${reviewId}/upvote`);
  if (res && res.status === 200) {
    dispatch({ type: UPVOTE_REVIEW, payload: {} });
  } else {
    dispatch(failedConnection());
  }
};

export const returnSinlgeReview = (reviewId) => async dispatch => {
  const res = await axios.get(`${api}/api/reviews/${reviewId}`);
  if (res && res.status === 200) {
    dispatch({ type: RETURN_SINGLE_REVIEW, payload: {} });
  } else {
    dispatch(failedConnection());
  }
};

export const submitComment = (reviewId, comment, userId) => async dispatch => {
  const res = await axios.post(`${api}/api/reviews/${reviewId}/comments`, { userId, content: comment });
  if (res && res.status === 200) {
    dispatch({ type: SUBMIT_COMMENT, payload: {} });
  } else {
    dispatch(failedConnection());
  }
};
