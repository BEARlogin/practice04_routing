import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { fetchUsersThunk } from "../ thunks";

export function UsersLoader({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersThunk())
    },[])

    return <>
        {children}
    </>
}