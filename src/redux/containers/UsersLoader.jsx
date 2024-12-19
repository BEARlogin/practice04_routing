import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersThunk } from "../slices/users";
import { fetchUsers } from "../../api/users";

export function UsersLoader({ children }) {
    const dispatch = useDispatch();
    const needFetch = useSelector((state) => !state.users.loading && !state.users.loaded);

    useEffect(() => {
        if(!needFetch) {
            return
        }
        dispatch(fetchUsersThunk())
    },[needFetch])

    return <>
        {children}
    </>
}