import { apiSlice } from "./../../../services/improveasy/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),

        refreshToken: builder.mutation({
            query: token => ({
                url: '/auth/refresh-token',
                method: 'GET',
                body: {refreshToken: "fromloclstorage"}
            })
        })
 

    })
})

export const {
    useLoginMutation,
    refreshToken
} = authApiSlice