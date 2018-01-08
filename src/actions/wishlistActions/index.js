import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import {
  FETCH_WISHLIST_TEAS,
  RETURN_WISHLIST_TEAS,
  ADD_TEA_TO_WISHLIST
 } from './types';

import { failedConnection } from '../connectionActions';

export const addTeaToWishlist = (tea, userId) => async dispatch => {
 const res = await axios.post(`${api}/api/user/wishlist/add`, { teaId: tea._id, userId })
                        .catch(err => console.log(err));
 if (res && res.status === 200) {
   dispatch({ type: ADD_TEA_TO_WISHLIST, payload: tea });
 } else {
   dispatch(failedConnection());
 }
};

export const fetchWishlistTeas = () => dispatch => {
 dispatch({ type: FETCH_WISHLIST_TEAS });
};

export const returnWishlistTeas = (userId) => async dispatch => {
 const res = await axios.get(`${api}/api/user/${userId}/wishlist/get`)
                        .catch(err => console.log(err));
 if (res && res.status === 200) {
   dispatch({ type: RETURN_WISHLIST_TEAS, payload: res.data });
 } else {
   dispatch(failedConnection());
 }
};
