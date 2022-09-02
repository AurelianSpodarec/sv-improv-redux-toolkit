import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://improveasy-admin-api.madeatsilverchip.com/',
    credentials: 'omit',
    prepareHeaders: (headers, { getState }:any) => {
        const token = getState().auth.token
        if(token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    }
})