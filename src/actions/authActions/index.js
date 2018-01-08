import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import { updateAsync } from '../helpers';
import {
  FETCH_USER,
  CHECK_ON_BOARDING,
  LOG_OUT_USER,
  SUBMIT_ON_BOARDING
} from './types';

import { failedConnection } from '../connectionActions';

export const onLoggedIn = (user) => async dispatch => {
  let res;
  try {
    await AsyncStorage
          .setItem('USER', JSON
          .stringify(user))
          .catch(err => console.log(err));
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
  dispatch({ type: FETCH_USER, payload: res });
};

export const logOutUser = () => async dispatch => {
  await AsyncStorage.removeItem('USER');
  dispatch({ type: LOG_OUT_USER });
};

export const checkOnBoarding = (id) => async dispatch => {
  const res = await axios.get(`${api}/api/user/${id}/onboardstatus`)
                         .catch(err => console.log(err));
  if (res && res.status === 200) {
    dispatch({ type: CHECK_ON_BOARDING, payload: res.data });
  } else {
    dispatch(failedConnection());
  }
};

export const submitOnboarding = (userId, moods, categories) => async dispatch => {
  const res = await axios.post(`${api}/api/user/${userId}/onboardsubmit`, { moods, categories });
  if (res && res.status === 200) {
    const user = await updateAsync('USER', {
      chosenMoods: moods,
      chosenCategories: categories
    });
    dispatch({ type: SUBMIT_ON_BOARDING, payload: user });
  } else {
    dispatch(failedConnection());
  }
};
