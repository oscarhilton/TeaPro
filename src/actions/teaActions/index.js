import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import {
  FETCH_TEA_DETAILS,
  MAKE_CURRENT_TEA,
  REQUEST_DISCOVER_CATEGORIES,
  RETURN_DISCOVER_CATEGORIES
 } from './types';

import { failedConnection } from '../connectionActions';

export const fetchTeaDetails = () => dispatch => {
  dispatch({ type: FETCH_TEA_DETAILS });
};

export const makeCurrentTea = (teaId) => async dispatch => {
  let payload = null;
  const storageTea = await AsyncStorage.getItem(String(teaId));

  // if (storageTea === null) {
  //   payload = JSON.parse(storageTea);
  //   console.log('GETTING FROM STORAGE!');
  // } else {
  //   const res = await axios.get(`${api}/api/teas/${teaId}/display`);
  //   payload = res.data;
  //   await AsyncStorage.setItem(String(teaId), JSON.stringify(payload));
  //   console.log('GETTING FROM API!');
  // }

  // STORE TEA FOR BETTER PERFORMANCE ??
  const res = await axios.get(`${api}/api/teas/${teaId}/display`);
  if (res && res.status === 200) {
    payload = res.data;
    dispatch({ type: MAKE_CURRENT_TEA, payload });
  } else {
    dispatch(failedConnection());
  }
};

export const requestDiscoverCategories = () => dispatch => {
  dispatch({ type: REQUEST_DISCOVER_CATEGORIES });
};

export const returnDiscoverCategories = (userId) => async dispatch => {
  const res = await axios.get(`${api}/api/user/${userId}/discover/categories`)
                         .catch(err => console.log(err));
  if (res && res.status === 200) {
    dispatch({ type: RETURN_DISCOVER_CATEGORIES, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
};
