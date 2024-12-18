import { USER_UPDATE_ACTION } from "../constants/actions";
import {dataSource} from '../../storage/users';

export function users(state = dataSource, action) {
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
    default:
      return state;
  }
}
