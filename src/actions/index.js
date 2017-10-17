import axios from 'axios';
import { GET_TEA_CATEGORIES } from './types';

export const getAllCategories = () => async dispatch => {
  const res = await axios.get('http://127.0.0.1:5000/api/category/all');

  console.log(res);

  dispatch({ type: GET_TEA_CATEGORIES, payload: res.data.cats });
};
