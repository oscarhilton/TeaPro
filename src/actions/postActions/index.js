import axios from 'axios';
import { api } from '../../api';
import {
  SUBMIT_POST,
  FETCH_HOT_POSTS,
  RETURN_HOT_POSTS,
  FETCH_FOLLOWER_POSTS,
  RETURN_FOLLOWER_POSTS
} from './types';

import { failedConnection } from '../connectionActions';

export const submitPost = (userId, postContent) => async dispatch => {
  const res = axios.post(`${api}/api/user/posts/${userId}`, { postContent });
  if (res && res.status === 200) {
    dispatch({ type: SUBMIT_POST, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
};

export const fetchHotPosts = () => dispatch => {
  dispatch({ type: FETCH_HOT_POSTS });
};

export const returnHotPosts = () => async dispatch => {
  const res = await axios.get(`${api}/api/user/posts/hot`);
  if (res && res.status === 200) {
    dispatch({ type: RETURN_HOT_POSTS, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
};

export const fetchFollowerPosts = () => dispatch => {
  dispatch({ type: FETCH_FOLLOWER_POSTS });
};

export const returnFollowerPosts = (followers) => async dispatch => {
  console.log(followers, '<-- followers');
  const res = await axios.post(`${api}/api/user/posts`, { followers });
  if (res && res.status === 200) {
    dispatch({ type: RETURN_FOLLOWER_POSTS, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
};
