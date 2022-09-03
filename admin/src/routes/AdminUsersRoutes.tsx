// import { Switch, Route, RouteMatch } from 'react-router-dom';

// import AdminUserContainer from '@pages/adminUsers/adminUser/AdminUserContainer';
import AdminList from '@pages/Admin/AdminList/AdminList';
import DefaultRedirect from './DefaultRedirect';

const AdminListRoutes: React.FC = () => {
    // const { path } = RouteMatch();

    return (
        <>
         {/* // <Switch> */}
            {/* <Route path={path}> */}
                {/* <Admi/nList /> */}
            {/* </Route>/ */}
            {/* <Route path={`${path}/create`}> */}
                {/* <AdminList showCreateModal /> */}
            {/* </Route> */}
            {/* <Route path={`${path}/:id`}> */}
                {/* <AdminUserContainer /> */}
            {/* </Route> */}
            {/* <Route path={`${path}/:id/:action`}> */}
                {/* <AdminUserContainer /> */}
            {/* </Route> */}
            {/* <DefaultRedirect to={path} /> */}
        {/* </Switch> */}
        </>
       
    );
};

export default AdminListRoutes;
