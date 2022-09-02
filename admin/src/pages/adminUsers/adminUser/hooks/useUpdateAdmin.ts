import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'lib/src/hooks/usePrevious';
import useForm from 'lib/src/hooks/useForm';

// import { updateAdminUser } from '@actions/adminUsers';

import { useHistory } from 'react-router-dom';

import { AdminUser } from 'src/types/shared/AdminUser';

export default function useUpdateAdmin({
    id,
    email,
    firstName,
    lastName,
}: AdminUser) {
    const dispatch = useDispatch();
    const history = useHistory();

    const closeModal = useCallback(() => {
        history.replace(`/admin-users/${id}`);
    }, [history, id]);

    const [formState, handleChange] = useForm({ email, firstName, lastName });

    const handleSubmit = useCallback(() => {
        // dispatch(updateAdminUser(id, formState));
    }, [dispatch, id, formState]);

 
 
}

interface FormState {
    email: string;
    firstName: string;
    lastName: string;
}
interface UpdateAdminReturn {
    handleSubmit: () => void;
    formState: FormState;
    handleChange: <T>(name: 'firstName' | 'lastName' | 'email', value: T) => void;
    closeModal: () => void;
    isPosting: boolean;
    error: string | null;
}
