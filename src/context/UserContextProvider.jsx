import { useState } from "react";
import { UserContext } from "./UserContext";
import { fetchUsers as fetchUsersApi } from "../api/users";

export function UserContextProvider({ children }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    async function fetchUsers() {
        setLoading(true);
        const res = await fetchUsersApi();
        setItems(res);
        setLoaded(true);
        setLoading(false);
    }

    async function userUpdate(id, data) {
        setItems(items.map(user => user.id === id ? {...user, ...data} : user)); 
    }

    return <UserContext.Provider value={{
        items,
        loading,
        loaded,
        fetchUsers,
        userUpdate
    }}>{children}</UserContext.Provider>;
}