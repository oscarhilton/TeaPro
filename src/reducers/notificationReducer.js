import {
  NEW_NOTIFICATION
} from '../actions/notificationActions/types';

const INITIAL_STATE = {
  list: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_NOTIFICATION:
      return {
        ...state,
        list: [
          {
            message: action.payload,
            timeStamp: new Date()
          },
          ...state.list
        ]
      };
    default:
      return state;
  }
}
