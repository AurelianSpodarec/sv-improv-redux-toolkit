import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./../services/improveasy/api/apiSlice";
import authReducer from "./features/auth/authSlice";
// import { adminAPI } from "./features/admin/admin-services";
 
// export 

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>  
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    // Add env file and say if this is prod or not
})