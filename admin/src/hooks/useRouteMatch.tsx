import { matchRoutes, useLocation } from "react-router-dom"

export const useRouteMatch = (mathRoute:any) => {
    const location = useLocation()
    console.log(location)
    const isMatch = location.pathname === mathRoute
    return isMatch;
}