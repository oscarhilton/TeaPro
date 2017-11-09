import axios from 'axios';
import { api } from '../../api';
import {
  FETCH_ALL_MOODS,
  RETURN_ALL_MOODS
 } from './types';

export const fetchAllMoods = () => dispatch => {
  dispatch({ type: FETCH_ALL_MOODS });
};

export const returnAllMoods = () => async dispatch => {
  const res = await axios.get(`${api}/api/moods/all`);
  dispatch({ type: RETURN_ALL_MOODS, payload: res.data });
};
