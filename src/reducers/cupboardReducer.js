import {
  GET_CUPBOARD_TEAS,
  ADD_TEA_TO_CUPBOARD
 } from '../actions/types';

const INITIAL_STATE = {
  loaded: false,
  teas: []
};

 export default function (state = INITIAL_STATE, action) {
   switch (action.type) {
     case GET_CUPBOARD_TEAS:
       return {
         loaded: true,
         teas: action.payload
       };
     case ADD_TEA_TO_CUPBOARD:
       console.log(action.payload);
       return {
         ...state,
         teas: [action.payload, ...state.teas]
       };
     default:
       return state;
   }
 }
