import { useLocation, Navigate, Outlet } from "react-router-dom";
import { selectCurrentToken } from "./../../redux-toolkit/features/auth/authSlice";

function ProtectedRoute() {
    const isAuthenticated = false
    const location = useLocation()

    return (
        isAuthenticated
            ? <Outlet />
            : <Navigate to="/login/auth" state={{ from: location }} replace />
    )
}

export default ProtectedRoute;