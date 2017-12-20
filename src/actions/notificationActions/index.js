import axios from 'axios';
import { api } from '../../api';
import {
  NEW_NOTIFICATION,
  FETCH_NOTIFICATIONS,
  GET_NOTIFICATIONS
} from './types';

export const newNotification = (message) => dispatch => {
  dispatch({ type: NEW_NOTIFICATION, payload: message });
};

export const fetchNotifications = () => dispatch => {
  dispatch({ type: FETCH_NOTIFICATIONS });
};

export const getNotifications = (userId) => async dispatch => {
  const res = await axios.get(`${api}/api/user/${userId}/notifications`);
  dispatch({ type: GET_NOTIFICATIONS, payload: res.data });
};
