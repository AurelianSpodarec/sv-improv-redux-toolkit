import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import { apiSlice } from "./../services/improveasy/api/apiSlice";

import authReducer from "./features/auth/authSlice";
import modalReducer from "./features/modal/modalSlice";
// import { adminAPI } from "./features/admin/admin-services";
// export 

const authTokenConfig = {
    key: 'auth',
    storage,
    whiteList: ['refreshToken'],
    blackList: []
}

const persistedAuth = persistReducer(authTokenConfig, authReducer)

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: persistedAuth,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>  
        getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)