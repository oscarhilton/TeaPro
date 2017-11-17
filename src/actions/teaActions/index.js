import axios from 'axios';
import { api } from '../../api';
import {
  FETCH_TEA_DETAILS,
  MAKE_CURRENT_TEA
 } from './types';

export const fetchTeaDetails = () => dispatch => {
  dispatch({ type: FETCH_TEA_DETAILS });
};

export const makeCurrentTea = (teaId) => async dispatch => {
  const res = await axios.get(`${api}/api/teas/${teaId}/display`);
  console.log(res);
  dispatch({ type: MAKE_CURRENT_TEA, payload: res.data });
};
