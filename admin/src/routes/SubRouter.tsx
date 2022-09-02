import { Redirect, Route, useLocation } from 'react-router-dom';
import { getJwtToken, validateJWT } from 'lib/src/utils/jwt';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, children, auth = false, exact = false }) => {
    const location = useLocation();

    if (auth) {
        const token = getJwtToken();
        const isValidToken = token ? validateJWT(token) : false;

        if (!isValidToken) return <Redirect to="/auth/login" from={location.pathname} />;
    }

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
};

interface ProtectedRouteProps {
    children: React.ReactNode;
    path: string;
    auth?: boolean;
    exact?: boolean;
}

export default ProtectedRoute;