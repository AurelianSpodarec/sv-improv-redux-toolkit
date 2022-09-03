 
import { useSelector } from 'react-redux';

import AdminUsersTable from './components/AdminUsersTable';
import CreateAdminUserModal from './CreateAdminUserModal';
import Title from 'lib/src/components/typography/Title';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import LinkButton from 'lib/src/components/button/LinkButton';

import { useGetAdminListQuery } from '../../../redux-toolkit/features/admin/adminApiSlice'; 

const AdminList: React.FC<AdminListProps> = ({ showCreateModal = false }) => {
    const { data, isLoading, error } = useGetAdminListQuery('adminUsers')

    console.log(data)
    if(isLoading) return <>Loading</>
    return (
        <>
            <CreateHeader>
                <Title>Admins</Title>
                <LinkButton source="positive" icon="plus" href="/admin-users/create">
                    Create
                </LinkButton>
            </CreateHeader>

            <AdminUsersTable adminUsers={data} isFetching={isLoading} />
        </>
    );
};

interface AdminListProps {
    showCreateModal?: boolean;
}

export default AdminList;
