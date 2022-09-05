import { apiSlice } from "../../../services/improveasy/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        getUserList: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',
            })
        }),
        getUserView: builder.query({
            query: (id:string) => ({
                url: `/users/${id}`,
                method: 'GET',
            })
        }),
        createUser: builder.mutation({
            query: (body:object) => ({
                url: '/users',
                method: 'POST',
                body
            })
        }),
        updateUser: builder.mutation({
            query: ({id, body}) => ({
                url: `/users/${id}`,
                method: 'PATCH',
                body
            })
        }),
        deleteUser: builder.mutation({
            query: (id:string) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            })
        }),
        updatePasswordUser: builder.query({
            query: (id:string) => ({
                url: `/users/${id}/updatePassword`,
                method: 'PATCH',
            })
        }),

    })
})

export const {
    useGetUserListQuery,
    useGetUserViewQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useUpdatePasswordUserQuery,
} = userApiSlice