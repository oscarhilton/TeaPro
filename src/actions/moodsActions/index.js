import axios from 'axios';
import { api } from '../../api';
import {
  FETCH_ALL_MOODS,
  RETURN_ALL_MOODS,
  ADD_MOOD_TO_USER,
  REMOVE_MOOD_FROM_USER
 } from './types';

export const fetchAllMoods = () => dispatch => {
  dispatch({ type: FETCH_ALL_MOODS });
};

export const returnAllMoods = () => async dispatch => {
  const res = await axios.get(`${api}/api/moods/all`);
  dispatch({ type: RETURN_ALL_MOODS, payload: res.data });
};

export const addMoodToUser = (id) => dispatch => {
  dispatch({ type: ADD_MOOD_TO_USER, payload: id });
};

export const removeMoodFromUser = (id) => dispatch => {
  dispatch({ type: REMOVE_MOOD_FROM_USER, payload: id });
};
