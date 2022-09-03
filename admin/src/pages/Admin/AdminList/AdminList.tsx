 
import { useSelector } from 'react-redux';

import AdminUsersTable from './AdminUsersTable';
import CreateAdminUserModal from './CreateAdminUserModal';
import Title from 'lib/src/components/typography/Title';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import LinkButton from 'lib/src/components/button/LinkButton';

import { useGetAdminListQuery } from '../../../redux-toolkit/features/admin/adminApiSlice'; 
import { Link } from 'react-router-dom';

const AdminList: React.FC<AdminListProps> = ({ showCreateModal = false }) => {
    const { data, isLoading, error } = useGetAdminListQuery('adminUsers')

    console.log("Admin List", data)
    return (
        <>
            {/* <Link to="">s</Link> */}
            <CreateHeader>
                <Title>Admins</Title>
                <LinkButton source="positive" icon="plus" href="/admin-users/create">
                    Create
                </LinkButton>
            </CreateHeader>

            {/* <AdminUsersTable adminUsers={data} isFetching={isLoading} /> */}
            {/* {showCreateModal && <CreateAdminUserModal />} */}
        </>
    );
};

interface AdminListProps {
    showCreateModal?: boolean;
}

export default AdminList;
