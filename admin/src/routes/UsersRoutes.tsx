import { Route,} from 'react-router-dom';
  

import DefaultRedirect from './DefaultRedirect';

const UsersRoutes: React.FC = () => {
    // const { path } = useRouteMatch();
    return (
        <>
        {/* // <Switch> */}
            {/* <Route exact path={`${path}`}>
                <Users />
            </Route>
            <Route exact path={`${path}/:id`}>
                <UserContainer />
            </Route>
            <Route exact path={`${path}/:id/:action`}>
                <UserContainer />
            </Route>
            <DefaultRedirect to={path} /> */}
        {/* // </Switch> */}
        </>
    );
};

export default UsersRoutes;
