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
        createAdmin: builder.query({
            query: (body:string) => ({
                url: `/adminUsers`,
                method: 'PUT',
                body
            })
        }),
        updateAdmin: builder.query({
            query: ({id, body}) => ({
                url: `/adminUsers/${id}`,
                method: 'PATCH',
                body
            })
        }),
        deleteAdmin: builder.query({
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
    useCreateAdminQuery,
    useUpdateAdminQuery,
    useDeleteAdminQuery,
    useUpdatePasswordAdminQuery,
} = adminApiSlice