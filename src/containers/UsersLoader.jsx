import { useEffect } from "react"
import { useUsersStore } from "../zustand/users";

export function UsersLoader({ children }) {

    const needFetch = useUsersStore((state) => !state.loaded && !state.loading);

    useEffect(() => { 
        if(!needFetch) {
            return
        }
        useUsersStore.getState().fetchUsers();
    },[needFetch])

    return <>
        {children}
    </>
}