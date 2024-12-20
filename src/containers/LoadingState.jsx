import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function LoadingState({ children }) {
    const {loading} = useContext(UserContext);
    if(loading) {
        return <div>Loading...</div>
    }

    return <>{children}</>;
} 