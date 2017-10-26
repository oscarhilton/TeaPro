import axios from 'axios';
import { GET_TEA_CATEGORIES, NAVIGATE, GO_BACK, REQUEST_TEAS } from './types';

export const requestTeas = () => dispatch => {
  dispatch({ type: REQUEST_TEAS });
};

export const getAllCategories = () => async dispatch => {
  const res = await axios.get('https://calm-sands-55569.herokuapp.com/api/category/all');

  dispatch({ type: GET_TEA_CATEGORIES, payload: res.data.cats });
};

export const showTea = (tea) => dispatch => {
  dispatch({ type: NAVIGATE, routeName: 'ViewTea', params: tea });
};

export const goToScene = (scene, params) => dispatch => {
  dispatch({ type: NAVIGATE, routeName: scene, params });
};

export const goBack = () => dispatch => {
  dispatch({ type: GO_BACK });
};

export const addTeaToCupboard = (tea, userId) => dispatch => {
  console.log(tea, 'ID --->', userId);
  dispatch({ type: 'test' });
};
