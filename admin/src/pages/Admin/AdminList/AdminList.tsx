import react, { useState } from 'react';
import { useSelector } from 'react-redux';

import AdminUsersTable from './components/AdminUsersTable';
import Title from 'lib/src/components/typography/Title';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import LinkButton from 'lib/src/components/button/LinkButton';

import { useGetAdminListQuery, useCreateAdminMutation } from '../../../redux-toolkit/features/admin/adminApiSlice'; 

const AdminList: React.FC<AdminListProps> = ({ showCreateModal = false }) => {
    const { data, isLoading, error } = useGetAdminListQuery('adminUsers')


    // This needs to be dynamic for each save modal
    const [createAdmin] = useCreateAdminMutation()

    // PLAYGROUND
    const [state, setState] = useState({
        email: "woooooooeeeo@gmail.com",
            firstName: "wooo",
            lastName: "wowewe",
            password: "qweqweqwe",
            confirmPassword: "qweqweqwe"
    })

    async function handlerCreateAdmin(e:any) {
        e.preventDefault();
        const a = await createAdmin(state)
        console.log(a)
    }

    // User needs to be able to open a modal
    // pass in the handlerCreateAdmin
    //END PLAYGROUND



    if(isLoading) return <>Loading</>
    return (
        <>
            <CreateHeader title="Admins">
                <button type="button" onClick={(e) => handlerCreateAdmin(e)}>
                Create Admin
                </button>
                {/* <LinkButton source="positive" icon="plus" href="/admin-users/create"> */}
                    {/* Create */}
                {/* </LinkButton> */}
            </CreateHeader>

            <AdminUsersTable adminUsers={data} isFetching={isLoading} />
        </>
    );
};

interface AdminListProps {
    showCreateModal?: boolean;
}

export default AdminList;
