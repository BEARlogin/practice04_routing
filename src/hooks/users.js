import { useDispatch, useSelector } from "react-redux";
import { useUsersStore } from "../zustand/users";
import {
  fetchUsersThunk,
  userUpdate as userUpdateRedux,
} from "../redux/slices/users";
import { useEffect, useState } from "react";
import { fetchUsers } from "../api/users";

export function useUsersZustand() {
  const users = useUsersStore((state) => state.users);
  const loading = useUsersStore((state) => state.loading);
  const loaded = useUsersStore((state) => state.loaded);
  const fetchUsers = useUsersStore.getState().fetchUsers;
  const userUpdate = useUsersStore.getState().userUpdate;

  return {
    users,
    loading,
    loaded,
    fetch: () => {
      if (useUsersStore.getState().loaded || useUsersStore.getState().loading) {
        return;
      }
      fetchUsers();
    },
    update: userUpdate,
  };
}

export function useUsersRedux() {
  const users = useSelector((state) => state.users.items);
  const loading = useSelector((state) => state.users.loading);
  const loaded = useSelector((state) => state.users.loaded);
  const dispatch = useDispatch();
  const fetchUsers = () => dispatch(fetchUsersThunk());
  const userUpdate = userUpdateRedux;

  return {
    users,
    loading,
    loaded,
    fetch: () => {
      if (loaded || loading) {
        return;
      }
      fetchUsers();
    },
    update: userUpdate,
  };
}

export function useUsersVanilla() {
  const [users, setUsers] = useState([]);
  const loading = useState(false);
  const loaded = useState(false);

  useEffect(() => {
    fetchUsers().then((res) => {
        setUsers(res);
    })
  },[])

  return {
    users,
    loading,
    loaded,
    fetch: fetchUsers,
  };
}

export { useUsersRedux as useUsers };
