import { combineReducers, createStore } from "redux";
import { users } from "../reducers";

export const store = createStore(
  combineReducers({
    users,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
