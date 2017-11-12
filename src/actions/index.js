import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../api';
import {
  NAVIGATE,
  GO_BACK,
  FETCH_CUPBOARD_TEAS,
  RETURN_CUPBOARD_TEAS,
  ADD_TEA_TO_CUPBOARD,
  FETCH_WISHLIST_TEAS,
  GET_WISHLIST_TEAS,
  ADD_TEA_TO_WISHLIST
 } from './types';

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
  await axios.post(`${api}/api/user/${userId}/cupboard/add/${tea._id}`);
  dispatch({ type: ADD_TEA_TO_CUPBOARD, payload: tea });
};

export const fetchCupboardTeas = () => dispatch => {
  dispatch({ type: FETCH_CUPBOARD_TEAS });
};

// export const returnCupboardTeas = (userId) => async dispatch => {
//   // const storageCupboard = await AsyncStorage.getItem('UserCupboard');
//   const storageCupboard = null;
//
//   let cupboard = {};
//   if (storageCupboard === null) {
//     const res = await axios.post(`${api}/api/user/cupboard/get`, { userId });
//     await AsyncStorage.setItem('UserCupboard', JSON.stringify(res.data));
//     cupboard = res.data;
//   } else {
//     cupboard = JSON.parse(storageCupboard);
//   }
//
//   dispatch({ type: RETURN_CUPBOARD_TEAS, payload: cupboard });
// };

export const returnCupboardTeas = (userId) => async dispatch => {
  const res = await axios.post(`${api}/api/user/${userId}/cupboard`);
  dispatch({ type: RETURN_CUPBOARD_TEAS, payload: res.data });
};

export const addTeaToWishlist = (tea, userId) => async dispatch => {
  const res = await axios.post(`${api}/api/user/wishlist/add`, { teaId: tea._id, userId });

  dispatch({ type: ADD_TEA_TO_WISHLIST, payload: tea });
};

export const fetchWishlistTeas = () => dispatch => {
  dispatch({ type: FETCH_WISHLIST_TEAS });
};

export const returnWishlistTeas = (userId) => async dispatch => {
  const res = await axios.post(`${api}/api/user/wishlist/get`, { userId });
  dispatch({ type: GET_WISHLIST_TEAS, payload: res.data });
};
