import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'lib/src/hooks/usePrevious';
// import { deleteAdminUser } from '@actions/adminUsers/deleteAdminUser';
 
import { useHistory } from 'react-router-dom';

export default function useDeleteAdmin(userID: number) {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteUser = useCallback(() => {
        // dispatch(deleteAdminUser(userID));
    }, [dispatch, userID]);

    // const prevSuccess = usePrevious(successs);
 
}

interface UseDeleteAdminReturn {
    deleteUser: () => void;
    isPosting: boolean;
    error: string | null;
}
