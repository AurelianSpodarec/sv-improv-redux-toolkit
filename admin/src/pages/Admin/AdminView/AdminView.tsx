import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Title from 'lib/src/components/typography/Title';
import { AdminUser } from 'src/types/shared/AdminUser';

import { useDeleteAdminMutation, useGetAdminViewQuery } from '../../../store/features/admin/adminApiSlice';
import { openModal } from '../../../store/features/modal/modalSlice';

function AdminView() {
    const { id } = useParams();
    const { data, isLoading, error } = useGetAdminViewQuery(`${id}`)

    const dispatch = useDispatch()
    const [deleteAdmin] = useDeleteAdminMutation()
    if(isLoading) return <>Loading</>
   
    function handleDelete() {
        const config = {
            id,
            type: "confirm",
            option: "delete",
            title: `Admin ${data.firstName} ${data.lastName}`,
            description: "Hiskdjskdjsdksjdi",
            onAction: () => deleteAdmin(`${id}`)
        }
        console.log(config)
        dispatch(openModal(config))
    }

    return (
        <>
            <Title>
                Admin - {data.firstName} {data.lastName}
            </Title>

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
        </>
    )
}

interface AdminViewProps {
    user: AdminUser | undefined;
}

export default AdminView
