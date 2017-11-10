import {
  FETCH_ALL_MOODS,
  RETURN_ALL_MOODS,
  ADD_MOOD_TO_USER,
  REMOVE_MOOD_FROM_USER
} from '../actions/moodsActions/types';

const INITIAL_STATE = {
  loading: false,
  moods: [],
  chosenMoods: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_MOODS:
      return {
        ...state,
        loading: true
      };
    case RETURN_ALL_MOODS:
      return {
        ...state,
        loading: false,
        moods: action.payload
      };
    case ADD_MOOD_TO_USER:
      return {
        ...state,
        chosenMoods: [
          ...state.chosenMoods,
          action.payload
        ]
      };
    case REMOVE_MOOD_FROM_USER:
      const moodArray = state.chosenMoods;
      const index = moodArray.indexOf(action.payload);
      if (index > -1) {
        moodArray.splice(index, 1);
      }
      return {
        ...state,
        chosenMoods: [
          ...moodArray
        ]
      };
    default:
      return state;
  }
}
