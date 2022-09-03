import { apiSlice } from "../../../services/improveasy/api/apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        getAdminList: builder.query({
            query: () => ({
                url: '/adminUsers',
                method: 'GET',
            })
        }),
        getAdminView: builder.query({
            query: (id:string) => ({
                url: `/adminUsers/${id}`,
                method: 'GET',
            })
        }),


    })
})

export const {
    useGetAdminListQuery,
    useGetAdminViewQuery
} = adminApiSlice