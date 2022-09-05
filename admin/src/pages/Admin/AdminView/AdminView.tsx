import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';

import { AdminUser } from 'src/types/shared/AdminUser';

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
             

            <ContentBlock>
                <ContentRow>
                    <ContentItem label="Name">
                        <p>{`${data.firstName} ${data.lastName}`}</p>
                    </ContentItem>
                    <ContentItem label="Email">
                        <p>
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                        </p>
                    </ContentItem>
                </ContentRow>
            </ContentBlock>

            <ButtonRow alignment="left">
                <button type="button" onClick={() => handleDelete()}>
                    Delete
                </button>
                {/* <LinkButton source="secondary" href={`/admin/${id}/edit`}>
                    Edit
                </LinkButton>
                <LinkButton source="secondary" href={`/admin/${id}/edit-password`}>
                    Edit password
                </LinkButton>
                <LinkButton source="negative" href={`/admin/${id}/delete`}>
                    Delete
                </LinkButton> */}
            </ButtonRow>
        </Container>
    )
}

interface AdminViewProps {
    user: AdminUser | undefined;
}

export default AdminView
