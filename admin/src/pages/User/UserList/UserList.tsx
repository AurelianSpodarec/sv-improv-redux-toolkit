import react, { useState } from 'react';
import { useCreateUserMutation, useGetUserListQuery } from './../../../../src/store/features/user/userApiSlice';

import useModal from '../../../../src/context/modal/useModal';

import { 
    Container, 
    Header, 
    Main
} from './../../../components';

function UserList() {
    const { data, isLoading, error } = useGetUserListQuery('users')
    const [createUser] = useCreateUserMutation()
 
    const modalContext = useModal()
 
    if(isLoading) return <>Loading</>
    if(error) return <>Most likely Not authorized</>
    return (
        <Container>

            <Header>
                {/* <button className="text-white" type="button" onClick={(e) => handlerCreateAdmin(e)}>
                    Create Admin
                </button> */}
            </Header>

            <Main>
              
            </Main>
    
        </Container>
    );
}

export default UserList;