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
            query: (admin:string) => ({
                url: `/adminUsers`,
                method: 'PUT',
                body: admin
            })
        }),
        updateAdmin: builder.query({
            query: (id:string) => ({
                url: `/adminUsers/${id}`,
                method: 'PATCH',
                // body: admin
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
                method: 'DELETE',
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