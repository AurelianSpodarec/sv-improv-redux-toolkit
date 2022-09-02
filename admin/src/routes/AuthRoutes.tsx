import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginForm from '@pages/login/LoginForm';
import DefaultRedirect from './DefaultRedirect';

const AuthRoutes: React.FC = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}/login`}>
                <LoginForm />
            </Route>
            <DefaultRedirect to={`${path}/login`} />
        </Switch>
    );
};

export default AuthRoutes;
