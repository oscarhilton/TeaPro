import {
  REQUEST_CATEGORIES,
  RETURN_ALL_CATEGORIES,
  ADD_CATEGORY_TO_USER,
  REMOVE_CATEGORY_FROM_USER
} from '../actions/categoryActions/types';

const INITIAL_STATE = {
  loading: false,
  categories: [],
  chosenCategories: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        loading: true
      };
    case RETURN_ALL_CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: action.payload
      };
    case ADD_CATEGORY_TO_USER:
      return {
        ...state,
        chosenCategories: [
          ...state.chosenCategories,
          action.payload
        ]
      };
    case REMOVE_CATEGORY_FROM_USER:
      const Array = state.chosenCategories;
      const index = Array.indexOf(action.payload);
      if (index > -1) {
        Array.splice(index, 1);
      }
      return {
        ...state,
        chosenCategories: [
          ...Array
        ]
      };
    default:
      return state;
  }
}
