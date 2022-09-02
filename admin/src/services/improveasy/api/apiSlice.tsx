import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "./../../../redux-toolkit/features/auth/authSlice"//redux-toolkit/features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://improveasy-admin-api.madeatsilverchip.com/',
    credentials: 'omit',
    prepareHeaders: (headers, { getState }:any) => {
        const token = getState().auth.token
        
        if(token) headers.set('Authorization', `Bearer ${token}`)
        return headers
    }
})

const baseQueryWithReauth = async (args:any, api:any, extraOptions:any) => {
    let result = baseQuery(args, api, extraOptions)
    
    // @ts-ignore
    if(result?.error?.originalStatus === 403) {
        console.log("sending refresh token")
        const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions)
        console.log(refreshResult) 

        if(refreshResult?.data) {
            const user = api.getState().auth.user 
            api.dispatch(setCredentials({...refreshResult.data, user}))

            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }

    } 

    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})