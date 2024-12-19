import { create } from "zustand";
import { fetchUsers } from "../api/users";

export const useUsersStore = create((set) => ({
  users: [],
  loading: false,
  loaded: false,
  fetchUsers: async () => {
    set({ loading: true });
    const res = await fetchUsers();

    set({ users: res, loading: false, loaded: true });
  },
  userUpdate: (id, data) => {
    set((state) => ({
      users: state.users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            ...data,
          };
        }
        return user;
      }),
    }));
  },
}));
