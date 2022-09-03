import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// General
import Layout from '@pages/Layout';
import NotFound from '@pages/NotFound/NotFound';

// Other
import Dashboard from '@pages/dashboard/Dashboard'; 

import PropertyList from '@pages/Property/PropertyList';
import PropertyView from '@pages/Property/PropertyView';

import AdminList from '@pages/Admin/AdminList/AdminList';
import AdminView from '@pages/Admin/AdminView/AdminView';

import LoginForm from '@pages/Auth/login/LoginForm';

const CustomRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Layout />}>

            <Route path="auth/login" element={<LoginForm />} />
            
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />}/>

                <Route path="admins" element={<AdminList />} />
                <Route path="admins/:id" element={<AdminView />} />

                <Route path="properties" element={<PropertyList />} />
                <Route path="properties/:id" element={<PropertyView />} />
            </Route>

            <Route path="*" element={<NotFound />} />

        </Route>
    </Routes>
);

export default CustomRoutes;