import {
  NEW_NOTIFICATION
} from './types';

export const newNotification = (message) => dispatch => {
  dispatch({ type: NEW_NOTIFICATION, payload: message });
};
