import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import usersReducer from "../slices/users";

export const store = createStore(
  combineReducers({
    users: usersReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
