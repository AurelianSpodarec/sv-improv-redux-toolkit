import react, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AdminUsersTable from './components/AdminUsersTable';
import Title from 'lib/src/components/typography/Title';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import LinkButton from 'lib/src/components/button/LinkButton';

import { useGetAdminListQuery, useCreateAdminMutation } from '../../../store/features/admin/adminApiSlice'; 
import { closeModal, openModal } from '../../../store/features/modal/modalSlice';

const AdminList: React.FC<AdminListProps> = ({ showCreateModal = false }) => {
    const { data, isLoading, error } = useGetAdminListQuery('adminUsers')
    const dispatch = useDispatch();

    const [createAdmin] = useCreateAdminMutation()

    // PLAYGROUND
    const [state, setState] = useState({
        email: "wooooooo322323eeeo@gmail.com",
            firstName: "wooo",
            lastName: "wowewe",
            password: "qweqweqwe",
            confirmPassword: "qweqweqwe"
    })

    async function handlerCreateAdmin(e:any) {
        e.preventDefault();
     
        const config ={
            type: 'save',
            title: "Create Admin",
            description: "",
            action: () => createAdmin(state)
        }

        dispatch(openModal(config))
    }

    if(isLoading) return <>Loading</>
    if(error) return <>Most likely Not authorized</>
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
