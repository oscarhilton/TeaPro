import axios from 'axios';
import { GET_TEA_CATEGORIES, NAVIGATE } from './types';

export const getAllCategories = () => async dispatch => {
  const res = await axios.get('https://calm-sands-55569.herokuapp.com/api/category/all');

  dispatch({ type: GET_TEA_CATEGORIES, payload: res.data.cats });
};

export const showTea = (tea) => dispatch => {
  dispatch({ type: NAVIGATE, routeName: 'ViewTea', params: tea });
};
