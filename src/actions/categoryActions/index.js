import axios from 'axios';
// import { AsyncStorage } from 'react-native';
import { api } from '../../api';

import {
  REQUEST_CATEGORIES,
  RETURN_ALL_CATEGORIES,
  ADD_CATEGORY_TO_USER,
  REMOVE_CATEGORY_FROM_USER,
 } from './types';

 export const requestCategories = () => dispatch => {
   dispatch({ type: REQUEST_CATEGORIES });
 };

 export const returnAllCategories = () => async dispatch => {
   const res = await axios.get(`${api}/api/category/all`);
   dispatch({ type: RETURN_ALL_CATEGORIES, payload: res.data });
 };

export const addCategoryToUser = (id) => dispatch => {
  dispatch({ type: ADD_CATEGORY_TO_USER, payload: id });
};

export const removeCategoryFromUser = (id) => dispatch => {
  dispatch({ type: REMOVE_CATEGORY_FROM_USER, payload: id });
};
