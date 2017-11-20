import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import {
  FETCH_TEA_DETAILS,
  MAKE_CURRENT_TEA
 } from './types';

export const fetchTeaDetails = () => dispatch => {
  dispatch({ type: FETCH_TEA_DETAILS });
};

export const makeCurrentTea = (teaId) => async dispatch => {
  let payload = null;
  const storageTea = await AsyncStorage.getItem(String(teaId));

  if (storageTea === null) {
    payload = JSON.parse(storageTea);
    console.log('GETTING FROM STORAGE!');
  } else {
    const res = await axios.get(`${api}/api/teas/${teaId}/display`);
    payload = res.data;
    await AsyncStorage.setItem(String(teaId), JSON.stringify(payload));
    console.log('GETTING FROM API!');
  }
  dispatch({ type: MAKE_CURRENT_TEA, payload });
};
