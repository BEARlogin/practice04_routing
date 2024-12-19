import { useUsersStore } from "../zustand/users";

export function LoadingState({ children }) {
    const loading = useUsersStore((state) => state.loading);

    if(loading) {
        return <div>Loading...</div>
    }

    return <>{children}</>;
}