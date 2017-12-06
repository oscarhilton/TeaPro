import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import {
  LOAD_USER,
  DISPLAY_USER,
  FETCH_USER_CUPBOARD_TEAS,
  RETURN_USER_CUPBOARD_TEAS,
  FETCH_USER_WISHLIST_TEAS,
  RETURN_USER_WISHLIST_TEAS
 } from './types';

 export const loadUser = () => dispatch => {
   dispatch({ type: LOAD_USER });
 };

 export const displayUser = (userId) => async dispatch => {
   const res = await axios.get(`${api}/api/user/view/${userId}`);
   dispatch({ type: DISPLAY_USER, payload: res.data });
 };

 export const fetchUserCupboardTeas = () => dispatch => {
   dispatch({ type: FETCH_USER_CUPBOARD_TEAS });
 };

 export const returnUserCupboardTeas = (userId) => async dispatch => {
   const res = await axios.post(`${api}/api/user/${userId}/cupboard`);
   dispatch({ type: RETURN_USER_CUPBOARD_TEAS, payload: res.data });
 };

 export const fetchUserWishlistTeas = () => dispatch => {
  dispatch({ type: FETCH_USER_WISHLIST_TEAS });
 };

 export const returnUserWishlistTeas = (userId) => async dispatch => {
  const res = await axios.get(`${api}/api/user/${userId}/wishlist/get`);
  dispatch({ type: RETURN_USER_WISHLIST_TEAS, payload: res.data });
 };
