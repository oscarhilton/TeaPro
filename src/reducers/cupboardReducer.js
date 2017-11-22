import {
  FETCH_CUPBOARD_TEAS,
  RETURN_CUPBOARD_TEAS,
  ADD_TEA_TO_CUPBOARD
} from '../actions/cupboardActions/types';

const INITIAL_STATE = {
  loading: null
};

 export default function (state = INITIAL_STATE, action) {
   switch (action.type) {
     case FETCH_CUPBOARD_TEAS:
       return {
         ...state,
         loading: true
       };
     case RETURN_CUPBOARD_TEAS:
       return {
         loading: false,
         teas: action.payload
       };
     case ADD_TEA_TO_CUPBOARD:
       console.log(state, action.payload, '<-- PAYLOAD');
       return {
         ...state,
         teas: [...state.teas, action.payload]
       };
     default:
       return state;
   }
 }
