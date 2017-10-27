import { AsyncStorage } from 'react-native';
// import axios from 'axios';
import { FETCH_USER } from './types';

export const onLoggedIn = (user) => async dispatch => {
  await AsyncStorage.setItem('USER', JSON.stringify(user));
  const res = {
    loggedIn: true,
    user
  };
  dispatch({ type: FETCH_USER, payload: res });
};

export const fetchUser = () => async dispatch => {
  const storageUser = await AsyncStorage.getItem('USER');
  const userObj = JSON.parse(storageUser);
  const res = {
    loggedIn: true,
    user: userObj
  };
  dispatch({ type: FETCH_USER, payload: res });
};
