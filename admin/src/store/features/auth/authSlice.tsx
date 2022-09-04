import { createSlice } from '@reduxjs/toolkit';
import jwtDecode, { JwtPayload } from 'jwt-decode';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        refreshToken: null,
    },
    reducers: {
        setUserData: (state, action) => {
            const { user } = action.payload
            state.user = user
        },
        setCredentials: (state, action) => {
            const { token, refreshToken } = action.payload
            state.token = token
            state.refreshToken = refreshToken
            state.user = jwtDecode(token)

            // const jwt = localStorage.getItem('jwt');
            // const refreshToken = localStorage.getItem('refreshToken');

            // localStorage.setItem('jwt', data.token);
            // localStorage.setItem('refreshToken', data.refreshToken);
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        }
    }
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;


export const selectCurrentUser = (state:any) => state.auth.user
export const selectCurrentToken = (state:any) => state.auth.token
export const selectCurrentRefreshToken = (state:any) => state.auth.refreshToken