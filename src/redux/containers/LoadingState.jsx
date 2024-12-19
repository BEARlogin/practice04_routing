import { useSelector } from "react-redux";

export function LoadingState({ children }) {
    const loading = useSelector((state) => state.users.loading);

    if(loading) {
        return <div>Loading...</div>
    }

    return <>{children}</>;
}