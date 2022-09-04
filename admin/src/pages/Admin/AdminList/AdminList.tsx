import react, { useState } from 'react';

import AdminUsersTable from './components/AdminUsersTable';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import LinkButton from 'lib/src/components/button/LinkButton';

import { useGetAdminListQuery, useCreateAdminMutation } from '../../../store/features/admin/adminApiSlice'; 
import useModal from '../../../../src/context/modal/useModal';


const AdminList: React.FC<AdminListProps> = ({ showCreateModal = false }) => {
    const { data, isLoading, error } = useGetAdminListQuery('adminUsers')
    const [createAdmin] = useCreateAdminMutation()

    const modalContext = useModal()

    async function handlerCreateAdmin(e:any) {
        e.preventDefault();
         // @ts-ignore
        modalContext.setConfig({
            type: 'save',
            title: "Create Admin",
            description: "",
            inputs: [
                {
                    col: 'w-full',
                    name: "email",
                    type: "email",
                    placeholder: "Email"
                },
                {
                    col: 'w-full',
                    name: "firstName",
                    type: "text",
                    placeholder: "First Name"
                },
                {
                    col: 'w-full',
                    name: "lastName",
                    type: "text",
                    placeholder: "Last Name"
                }
            ],// @ts-ignore
            onAction: (...args) => createAdmin(...args)
        })// @ts-ignore
        modalContext.open()
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