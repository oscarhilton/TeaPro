import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import {
  LOAD_USER,
  DISPLAY_USER
 } from './types';

 export const loadUser = () => dispatch => {
   dispatch({ type: LOAD_USER });
 };

 export const displayUser = (userId) => async dispatch => {
   const res = await axios.get(`${api}/api/user/view/${userId}`);
   dispatch({ type: DISPLAY_USER, payload: res.data });
 };
