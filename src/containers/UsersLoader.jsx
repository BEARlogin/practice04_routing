import { useEffect } from "react"
import { useUsers } from "../hooks/users";

export function UsersLoader({ children }) {
    const {fetch} = useUsers();

    useEffect(() => { 
        fetch();
    },[])

    return <>
        {children}
    </>
}