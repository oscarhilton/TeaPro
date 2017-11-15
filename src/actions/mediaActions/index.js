import axios from 'axios';
// import { AsyncStorage } from 'react-native';
import { api } from '../../api';
// import { updateUser } from '../helpers';
import {
  UPLOAD_USER_IMAGE
} from './types';

export const uploadUserImage = (data) => async dispatch => {
  console.log('STARTING UPLOAD', data);
  const res = await axios.post(`${api}/api/userupload`, data);
  // const res = await axios.post('http://httpbin.org/post', data);
  // dispatch({ type: RETURN_ALL_CATEGORIES, payload: res.data });
};
