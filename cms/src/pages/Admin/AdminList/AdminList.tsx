import react, { useState } from 'react';

import useModal from '../../../../src/context/modal/useModal';
import { useGetAdminListQuery, useCreateAdminMutation } from '../../../store/features/admin/adminApiSlice'; 


import { 
    Container, 
    Header, 
    Main
} from './../../../components';


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

            <Header>
                <button className="text-white" type="button" onClick={(e) => handlerCreateAdmin(e)}>
                    Create Admin
                </button>
            </Header>

            <Main>
               
            </Main>
    
        </Container>
    );
}

export default AdminList;