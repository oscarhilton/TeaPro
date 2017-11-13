import {
  NAVIGATE,
  GO_BACK
 } from './types';

 export const showTea = (tea) => dispatch => {
   dispatch({ type: NAVIGATE, routeName: 'ViewTea', params: tea });
 };

 export const goToScene = (scene, params) => dispatch => {
   dispatch({ type: NAVIGATE, routeName: scene, params });
 };

 export const goBack = () => dispatch => {
   dispatch({ type: GO_BACK });
 };
