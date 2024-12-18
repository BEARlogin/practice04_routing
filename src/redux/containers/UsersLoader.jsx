import { useEffect } from "react"
import { fetchUsers } from "../../api/users"
import { useDispatch } from "react-redux";
import { fetchUsersFulfilled, loaded, loading } from "../actions";

export function UsersLoader({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        if(fetchUsers.loaded) {
            return;
        }
        dispatch(loading())
        fetchUsers().then((res) => {
            const mappedUsers = res.gridRecords.map((user) => {
                const detail = res.detailsRecords.find((detail) => detail.id === user.id)
                return {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    active: user.active,
                    details: {
                        about: detail.about,
                        hobby: detail.hobby,
                        skills: detail.skills
                    }
                }
         
            });
            dispatch(fetchUsersFulfilled(mappedUsers)) 
            dispatch(loaded());
        }); 
    },[])

    return <>
        {children}
    </>
}