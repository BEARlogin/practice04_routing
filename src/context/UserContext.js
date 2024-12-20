import { createContext } from "react";

export const UserContext = createContext({
  items: [],
  loading: false,
  loaded: false,
  fetchUsers: () => {
    throw new Error("fetchUsers is not implemented");
  },
  userUpdate: (id, data) => {
    throw new Error("userUpdate is not implemented");
  },
});
