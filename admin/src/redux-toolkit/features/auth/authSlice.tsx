import { createSlice } from '@reduxjs/toolkit';

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
            state.token = user
        },
        setCredentials: (state, action) => {
            const { accessToken, refreshToken } = action.payload
            state.token = accessToken
            state.refreshToken = refreshToken  
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