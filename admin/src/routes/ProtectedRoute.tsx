import { useLocation, Navigate, Outlet } from "react-router-dom";
import { store } from "./../redux-toolkit/store";
import { selectCurrentToken } from "../redux-toolkit/features/auth/authSlice";

function ProtectedRoute() {
    const location = useLocation()
    const isAuthenticated = store.getState().auth.user;

    return (
        isAuthenticated
            ? <Outlet />
            : <Navigate to="/auth/login" state={{ from: location }} replace />
    )
}

export default ProtectedRoute