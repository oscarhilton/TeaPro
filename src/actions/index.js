import axios from 'axios';
import { api } from '../api';
import {
  GET_TEA_CATEGORIES,
  NAVIGATE,
  GO_BACK,
  REQUEST_TEAS,
  GET_CUPBOARD_TEAS,
  ADD_TEA_TO_CUPBOARD
 } from './types';

export const requestTeas = () => dispatch => {
  dispatch({ type: REQUEST_TEAS });
};

export const getAllCategories = () => async dispatch => {
  const res = await axios.get(`${api}/api/category/all`);

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

export const addTeaToCupboard = (tea, userId) => async dispatch => {
  console.log('clicked');
  const res = await axios.post(`${api}/api/user/cupboard/add`, { teaId: tea._id, userId });
  console.log(res);
  if (res.status === 200){
    console.log('yep');
  }

  dispatch({ type: ADD_TEA_TO_CUPBOARD, payload: tea });
};

export const getCupboardTeas = (userId) => async dispatch => {
  const res = await axios.post(`${api}/api/user/cupboard/get`, { userId });
  console.log(res, '<--- GET CUPBOARD TEAS');
  dispatch({ type: GET_CUPBOARD_TEAS, payload: res.data });
}
