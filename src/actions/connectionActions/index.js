import {
  CONNECTION_SUCCESS,
  CONNECTION_FAILURE
 } from './types';

export const successfulConnection = () => dispatch => {
  alert('CONNECTED!');
  dispatch({ type: CONNECTION_SUCCESS });
};

export const failedConnection = () => dispatch => {
  // alert('CONNECTION FAILED');
  dispatch({ type: CONNECTION_FAILURE });
};
