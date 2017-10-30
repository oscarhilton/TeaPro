import { AsyncStorage } from 'react-native';
// import axios from 'axios';
import { FETCH_USER } from './types';

export const onLoggedIn = (user) => async dispatch => {
  let res;
  try {
    await AsyncStorage.setItem('USER', JSON.stringify(user));
    res = {
      loggedIn: true,
      user
    };
  }
  catch (err) {
    console.log(err);
    res = {
      loggedIn: false,
    };
  }
  dispatch({ type: FETCH_USER, payload: res });
};

export const fetchUser = () => async dispatch => {
  const storageUser = await AsyncStorage.getItem('USER');
  const userObj = JSON.parse(storageUser);

  // const loggout = await AsyncStorage.removeItem('USER');
  // console.log(storageUser, '<- storageUser', loggout);

  let res = {};
  if (storageUser === null) {
    res = {
      loggedIn: false
    };
  } else {
    res = {
      loggedIn: true,
      user: userObj
    };
  }
  dispatch({ type: FETCH_USER, payload: res });
};
