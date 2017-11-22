import axios from 'axios';
// import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import {
  FETCH_CUPBOARD_TEAS,
  RETURN_CUPBOARD_TEAS,
  ADD_TEA_TO_CUPBOARD,
 } from './types';

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
