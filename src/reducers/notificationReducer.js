import {
  NEW_NOTIFICATION,
  FETCH_NOTIFICATIONS,
  GET_NOTIFICATIONS
} from '../actions/notificationActions/types';

const INITIAL_STATE = {
  loading: false,
  list: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_NOTIFICATION:
      return {
        ...state,
        popup: {
          message: action.payload,
          timeStamp: new Date()
        }
      };
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        loading: true
      };
    case GET_NOTIFICATIONS:
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    default:
      return state;
  }
}
