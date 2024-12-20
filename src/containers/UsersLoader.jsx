import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext";

export function UsersLoader({ children }) {
    const {fetchUsers,loaded,loading} = useContext(UserContext);

    useEffect(() => {
        if(loaded || loading) {
            return
        }
        fetchUsers();
    },[loaded, loading])

    return <>
        {children}
    </>
} 