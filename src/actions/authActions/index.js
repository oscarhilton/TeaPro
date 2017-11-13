import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import { updateUser } from '../helpers';
import {
  FETCH_USER,
  CHECK_ON_BOARDING,
  LOG_OUT_USER,
  SUBMIT_ON_BOARDING
} from './types';

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
    res = {
      loggedIn: false,
    };
  }
  dispatch({ type: FETCH_USER, payload: res });
};

export const fetchUser = () => async dispatch => {
  const storageUser = await AsyncStorage.getItem('USER');
  const userObj = JSON.parse(storageUser);

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
  console.log(res);
  dispatch({ type: FETCH_USER, payload: res });
};

export const logOutUser = () => async dispatch => {
  await AsyncStorage.removeItem('USER');
  dispatch({ type: LOG_OUT_USER });
};

export const checkOnBoarding = (id) => async dispatch => {
  const res = await axios.get(`${api}/api/user/${id}/onboardstatus`);
  console.log(res.data);
  dispatch({ type: CHECK_ON_BOARDING, payload: res.data });
};

export const submitOnboarding = (id, moods, categories) => async dispatch => {
  await axios.post(`${api}/api/user/${id}/onboardsubmit`, { moods, categories });
  const user = await updateUser({
    chosenMoods: moods,
    chosenCategories: categories
  });
  dispatch({ type: SUBMIT_ON_BOARDING, payload: user });
};
