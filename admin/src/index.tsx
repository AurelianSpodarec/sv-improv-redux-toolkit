import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import config from './config';

// import { Provider } from 'react-redux'

import 'lib/src/_styles/generic.scss';
import './_styles/main.scss';

import { initApi } from 'lib/src/utils/api';
import ErrorBoundary from 'lib/src/pages/error/ErrorBoundary';
import ModalProvider from './context/modal/modalContext';

const { API_URL } = config;
initApi(API_URL);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
    <ErrorBoundary>

        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

                <ModalProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </BrowserRouter>
                </ModalProvider>

                
            </PersistGate>
        </Provider>    
    
    </ErrorBoundary>
    </React.StrictMode>
);
