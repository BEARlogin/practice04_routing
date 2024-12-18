import { USER_UPDATE_ACTION } from "../constants/actions";

export function updateUser(id, data) {
  return {
    type: USER_UPDATE_ACTION,
    payload: {
      id,
      data,
    },
  };
}
