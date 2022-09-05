import React from 'react';
import { useParams } from 'react-router-dom';

import { useDeleteAdminMutation, useGetAdminViewQuery } from '../../../store/features/admin/adminApiSlice';

import useModal from './../../../../src/context/modal/useModal';
import Container from '@components/Container';

function AdminView() {
    const { id } = useParams();
    const modalContext = useModal()

    const { data, isLoading, error } = useGetAdminViewQuery(`${id}`)
    const [deleteAdmin] = useDeleteAdminMutation()


    if(isLoading) return <>Loading</>
   
    function handleDelete() {
        // @ts-ignore
        modalContext.setConfig({
            id,
            type: "confirm",
            option: "delete",
            title: `Admin ${data.firstName} ${data.lastName}`,
            description: "Hiskdjskdjsdksjdi",
            onAction: () => deleteAdmin(`${id}`)
        })// @ts-ignore
        modalContext.open()
    }

    return (
        <Container>
          
                Admin - {data.firstName} {data.lastName}
             
  
                        <p>{`${data.firstName} ${data.lastName}`}</p>
                    
                        <p>
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                        </p>
                   
        </Container>
    )
}

export default AdminView