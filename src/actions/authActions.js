import { AsyncStorage } from 'react-native';
// import axios from 'axios';
import { FETCH_USER } from './types';

export const onLoggedIn = (user) => async dispatch => {
  await AsyncStorage.setItem('USER', JSON.stringify(user));
  dispatch({ type: FETCH_USER, payload: user });
};

export const fetchUser = () => async dispatch => {
  console.log('fetchUser fired!');
  const storageUser = await AsyncStorage.getItem('USER');
  const userObj = JSON.parse(storageUser);
  const res = {
    loggedIn: true,
    user: userObj
  };
  console.log(res, '<--- RES !!!!!');
  dispatch({ type: FETCH_USER, payload: res });
};
