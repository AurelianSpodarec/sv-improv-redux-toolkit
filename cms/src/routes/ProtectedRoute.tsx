import { useLocation, Navigate, Outlet } from "react-router-dom";
import { store } from "../store/store";
import { selectCurrentToken } from "../store/features/auth/authSlice";

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