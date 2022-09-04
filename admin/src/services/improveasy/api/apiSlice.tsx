import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

import { setCredentials, logOut } from "../../../store/features/auth/authSlice"//redux-toolkit/features/auth/authSlice";
 
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
    let result = await baseQuery(args, api, extraOptions)
 
    // @ts-ignore
    console.log(result)
    if(result?.error?.status === 403 || result?.error?.status === 401) {
        console.log("sending refresh token")
        const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions)
        console.log("baseQueryWithReauth", refreshResult) 

        if(refreshResult?.data) {
            console.log("refreshResult???")
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