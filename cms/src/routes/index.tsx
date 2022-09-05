import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// General
import Layout from './../pages/Layout';
import NotFound from './../pages/NotFound/NotFound';

// Other
import Home from './../pages/Home/Home'; 

import PropertyList from './../pages/Property/PropertyList';
import PropertyView from './../pages/Property/PropertyView';

import AdminList from './../pages/Admin/AdminList/AdminList';
import AdminView from './../pages/Admin/AdminView/AdminView';

import UserList from '../pages/User/UserList/UserList';
import UserView from './../pages/User/UserView';

import LoginView from './../pages/Auth/Login/LoginView';



const CustomRoutes: React.FC = () => (
    <Routes>
    <Route path="/" element={<Layout />}>

        <Route path="auth/login" element={<LoginView />} />
        
        <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />}/>

            <Route path="admins" element={<AdminList />} />
            <Route path="admins/:id" element={<AdminView />} />

            <Route path="users" element={<UserList />} />
            <Route path="users/:id" element={<UserView />} />

            <Route path="properties" element={<PropertyList />} />
            <Route path="properties/:id" element={<PropertyView />} />
        </Route>

        <Route path="*" element={<NotFound />} />

    </Route>
    </Routes>
);

export default CustomRoutes;