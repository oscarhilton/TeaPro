import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import {
  LOAD_USER,
  DISPLAY_USER,
  FETCH_USER_CUPBOARD_TEAS,
  RETURN_USER_CUPBOARD_TEAS,
  FETCH_USER_WISHLIST_TEAS,
  RETURN_USER_WISHLIST_TEAS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  FETCH_USER_LIST,
  RETURN_USER_LIST
 } from './types';

 import { failedConnection, successfulConnection } from '../connectionActions';

 export const loadUser = () => dispatch => {
   dispatch({ type: LOAD_USER });
 };

 export const displayUser = (userId) => async dispatch => {
   const res = await axios.get(`${api}/api/user/view/${userId}`)
               .catch(err => console.log(err));
  if (res && res.status === 200) {
    dispatch({ type: DISPLAY_USER, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
 };

 export const fetchUserCupboardTeas = () => dispatch => {
   dispatch({ type: FETCH_USER_CUPBOARD_TEAS });
 };

 export const returnUserCupboardTeas = (userId) => async dispatch => {
   const res = await axios.post(`${api}/api/user/${userId}/cupboard`)
               .catch(err => console.log(err));
  if (res && res.status === 200) {
    dispatch({ type: RETURN_USER_CUPBOARD_TEAS, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
 };

 export const fetchUserWishlistTeas = () => dispatch => {
  dispatch({ type: FETCH_USER_WISHLIST_TEAS });
 };

 export const returnUserWishlistTeas = (userId) => async dispatch => {
  const res = await axios.get(`${api}/api/user/${userId}/wishlist/get`)
               .catch(err => console.log(err));
  if (res && res.status === 200) {
    dispatch({ type: RETURN_USER_WISHLIST_TEAS, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
 };

 export const followUser = (socket, authUser, userToFollow) => async dispatch => {
  const res = await axios.post(`${api}/api/user/${userToFollow._id}/follow`, { authUser })
                         .catch(err => console.log(err));
  if (res && res.status === 200) {
    socket.emit('new follower', {
      room: userToFollow._id,
      message: authUser.name
    });
    dispatch({ type: FOLLOW_USER, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
 };

 export const fetchUsersList = () => dispatch => {
   dispatch({ type: FETCH_USER_LIST });
 };

 export const returnUsersList = (userList) => async dispatch => {
   const res = await axios.post(`${api}/api/users`, { userList })
               .catch(err => console.log(err));
  if (res && res.status === 200) {
    dispatch({ type: RETURN_USER_LIST, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
 };
