// import { Switch } from 'react-router-dom';


import AdminUsersRoutes from './AdminUsersRoutes';
import AuthRoutes from './AuthRoutes';
import UsersRoutes from './UsersRoutes';
import Dashboard from '@pages/dashboard/Dashboard';
import DefaultRedirect from './DefaultRedirect';
import ProtectedRoute from './component/ProtectedRoute';
import AdminList from '@pages/Admin/AdminList/AdminList';
import { Routes, Route } from 'react-router-dom';

const CustomRoutes: React.FC = () => (
    <>
    <Routes>
        {/* <Route path="/" element={<}> */}

        {/* </Route> */}

        <Route path="/" element={<Dashboard />}/>
        <Route path="/admin-users" element={<AdminList />}/>
    </Routes>
    {/* <ProtectedRoute> */}
        HI
    {/* </ProtectedRoute> */}
    {/* // <Switch>
    //     <SubRouter exact path="/" auth>
    //         <Dashboard />
    //     </SubRouter>
    //     <SubRouter path="/auth">
    //         <AuthRoutes />
    //     </SubRouter>
    //     <SubRouter path="/users" auth>
    //         <UsersRoutes />
    //     </SubRouter>
    //     <SubRouter path="/admin-users" auth>
    //         <AdminUsersRoutes />
    //     </SubRouter>
    //     <SubRouter path="/properties" auth>
    //         <AdminUsersRoutes />
    //     </SubRouter>
    //     <DefaultRedirect to="/" /> */}
    {/* // </Switch> */}
    </>
);

export default CustomRoutes;
