import {
  FETCH_WISHLIST_TEAS,
  RETURN_WISHLIST_TEAS,
  ADD_TEA_TO_WISHLIST
} from '../actions/wishlistActions/types';

const INITIAL_STATE = {
  loading: null
};

 export default function (state = INITIAL_STATE, action) {
   switch (action.type) {
     case FETCH_WISHLIST_TEAS:
       return {
         ...state,
         teas: [],
         loading: true
       };
     case RETURN_WISHLIST_TEAS:
       return {
         loading: false,
         teas: action.payload
       };
     case ADD_TEA_TO_WISHLIST:
       return {
         ...state,
         teas: [action.payload, ...state.teas]
       };
     default:
       return state;
   }
 }
