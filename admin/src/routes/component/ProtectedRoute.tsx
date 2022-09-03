import { useLocation, Navigate, Outlet } from "react-router-dom";
import { selectCurrentToken } from "./../../redux-toolkit/features/auth/authSlice";

function ProtectedRoute() {
    const isAuthenticated = true
    console.log(selectCurrentToken)

    // console.log("Protected route", isAuthenticated);

    return (
        isAuthenticated
            ? <Outlet />
            : <>Noooooo</>
    )
}

export default ProtectedRoute;