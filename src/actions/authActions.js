import axios from 'axios';

export const loginWithGoogle = () => async dispatch => {
  const res = await axios.get('http://127.0.0.1:5000/auth/google');

  console.log(res);
  dispatch();
};
