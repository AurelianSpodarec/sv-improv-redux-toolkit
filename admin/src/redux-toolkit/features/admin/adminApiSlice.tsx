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
        createAdmin: builder.mutation({
            query: (body:object) => ({
                url: '/adminUsers',
                method: 'POST',
                body
            })
        }),
        updateAdmin: builder.mutation({
            query: ({id, body}) => ({
                url: `/adminUsers/${id}`,
                method: 'PATCH',
                body
            })
        }),
        deleteAdmin: builder.mutation({
            query: (id:string) => ({
                url: `/adminUsers/${id}`,
                method: 'DELETE',
            })
        }),
        updatePasswordAdmin: builder.query({
            query: (id:string) => ({
                url: `/adminUsers/${id}/updatePassword`,
                method: 'PATCH',
            })
        }),

    })
})

export const {
    useGetAdminListQuery,
    useGetAdminViewQuery,
    useCreateAdminMutation,
    useUpdateAdminMutation,
    useDeleteAdminMutation,
    useUpdatePasswordAdminQuery,
} = adminApiSlice