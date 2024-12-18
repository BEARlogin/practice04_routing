import { useSelector } from "react-redux";

export function LoadingState({ children }) {
    const loader = useSelector((state) => state.loader);

    if(loader) {
        return <div>Loading...</div>
    }

    return <>{children}</>;
}