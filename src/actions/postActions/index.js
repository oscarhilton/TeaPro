import axios from 'axios';
import { api } from '../../api';
import {
  SUBMIT_POST,
  FETCH_HOT_POSTS,
  RETURN_HOT_POSTS
} from './types';

export const submitPost = (userId, postContent) => async dispatch => {
  const res = axios.post(`${api}/api/user/posts/${userId}`, { postContent });
  dispatch({ type: SUBMIT_POST, payload: res.data });
};

export const fetchHotPosts = () => dispatch => {
  dispatch({ type: FETCH_HOT_POSTS });
};

export const returnHotPosts = () => async dispatch => {
  const res = await axios.get(`${api}/api/user/posts/hot`);
  dispatch({ type: RETURN_HOT_POSTS, payload: res.data });
};
