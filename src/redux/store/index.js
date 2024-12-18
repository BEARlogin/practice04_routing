import { combineReducers, createStore } from "redux";
import { loader, users } from "../reducers";

export const store = createStore(
  combineReducers({
    users,
    loader,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
