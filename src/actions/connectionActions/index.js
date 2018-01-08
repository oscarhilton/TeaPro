import {
  CONNECTION_SUCCESS,
  CONNECTION_FAILURE
 } from './types';

export const successfulConnection = () => dispatch => {
  dispatch({ type: CONNECTION_SUCCESS });
};

export const failedConnection = () => dispatch => {
  alert('CONNECTION FAILED');
  dispatch({ type: CONNECTION_FAILURE });
};

// export const failedConnection = () => dispatch => {
//   alert('CONNECTION FAILED');
//   dispatch({ type: CONNECTION_FAILURE });
// };
