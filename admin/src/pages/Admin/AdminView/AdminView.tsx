import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Title from 'lib/src/components/typography/Title';
import { AdminUser } from 'src/types/shared/AdminUser';
import { useParams } from 'react-router-dom';
import { useGetAdminViewQuery } from '../../../redux-toolkit/features/admin/adminApiSlice';

function AdminView() {
    const { id } = useParams<{ id: string; }>();
    const { data, isLoading, error } = useGetAdminViewQuery(`${id}`)

    if(isLoading) return <>Loading</>
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
                <LinkButton source="secondary" href={`/admin/${id}/edit`}>
                    Edit
                </LinkButton>
                <LinkButton source="secondary" href={`/admin/${id}/edit-password`}>
                    Edit password
                </LinkButton>
                <LinkButton source="negative" href={`/admin/${id}/delete`}>
                    Delete
                </LinkButton>
            </ButtonRow>
        </>
    )
}

interface AdminViewProps {
    user: AdminUser | undefined;
}

export default AdminView
