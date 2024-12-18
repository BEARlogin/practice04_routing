import {
  LOADED_ACTION,
  LOADING_ACTION,
  USER_FETCH_FULFILLED_ACTION,
  USER_UPDATE_ACTION,
} from "../constants/actions";

export function users(state = [], action) {
  switch (action.type) {
    case USER_UPDATE_ACTION:
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload.data,
          };
        }
        return user;
      });
    case USER_FETCH_FULFILLED_ACTION:
      return action.payload;
    default:
      return state;
  }
}

export function loader(state = false, action) {
  switch (action.type) {
    case LOADING_ACTION:
      return true;
    case LOADED_ACTION:
      return false;
    default:
      return state;
  }
}
