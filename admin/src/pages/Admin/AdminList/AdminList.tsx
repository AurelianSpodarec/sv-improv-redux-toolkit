import react, { useState } from 'react';

import AdminUsersTable from './components/AdminUsersTable';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import LinkButton from 'lib/src/components/button/LinkButton';

import { useGetAdminListQuery, useCreateAdminMutation } from '../../../store/features/admin/adminApiSlice'; 
import useModal from '../../../../src/context/modal/useModal';
import Container from '@components/Container';


function AdminList() {
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
                },
                {
                    col: 'w-full',
                    name: "password",
                    type: "password",
                    placeholder: "Password"
                },
                {
                    col: 'w-full',
                    name: "confirmPassword",
                    type: "password",
                    placeholder: "Confirm Password"
                }
            ],// @ts-ignore
            onAction: (...args) => createAdmin(...args)
        })// @ts-ignore
        modalContext.open()
    }

    if(isLoading) return <>Loading</>
    if(error) return <>Most likely Not authorized</>
    return (
        <Container>
            <CreateHeader title="Admins">
                <button type="button" onClick={(e) => handlerCreateAdmin(e)}>
                    Create Admin
                </button>
            </CreateHeader>

            <div className="text-gray-200 bg-[#1f2937] border border-solid py-14 rounded-xl border-[#374151]">
            <AdminUsersTable adminUsers={data} isFetching={isLoading} />
            </div>
        </Container>
    );
}

export default AdminList;