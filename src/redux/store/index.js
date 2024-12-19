import { applyMiddleware, combineReducers, createStore } from "redux";
import { loader, users } from "../reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(next);
//   }
//   return next(action);
// };

export const store = createStore(
  combineReducers({
    users,
    loader,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
