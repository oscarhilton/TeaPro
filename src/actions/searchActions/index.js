import axios from 'axios';
import { api } from '../../api';
import {
  START_SEARCH,
  RETURN_SEARCH,
  UPDATE_SEARCH,
  CLEAR_SEARCH,
  END_SEARCH
} from './types';

export const startSearch = () => dispatch => {
  dispatch({ type: START_SEARCH });
};

export const returnSearch = (term) => async dispatch => {
  const res = await axios.get(`${api}/api/search/${term}`);
  dispatch({ type: RETURN_SEARCH, payload: res.data });
};

export const updateSearch = (searchText) => dispatch => {
  dispatch({ type: UPDATE_SEARCH, payload: searchText });
};

export const endSearch = () => dispatch => {
  dispatch({ type: END_SEARCH });
};

export const clearSearch = () => dispatch => {
  dispatch({ type: CLEAR_SEARCH });
};
