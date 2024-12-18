import {
  LOADED_ACTION,
  LOADING_ACTION,
  USER_FETCH_FULFILLED_ACTION,
  USER_UPDATE_ACTION,
} from "../constants/actions";

export function updateUser(id, data) {
  return {
    type: USER_UPDATE_ACTION,
    payload: {
      id,
      data,
    },
  };
}

export function loading() {
  return {
    type: LOADING_ACTION,
  };
}
export function loaded() {
  return {
    type: LOADED_ACTION,
  };
}

export function fetchUsersFulfilled(users) {
  return {
    type: USER_FETCH_FULFILLED_ACTION,
    payload: users,
  };
}
