import { useUsers } from "../hooks/users";

export function LoadingState({ children }) {
    const {loading} = useUsers()

    if(loading) {
        return <div>Loading...</div>
    }

    return <>{children}</>;
}