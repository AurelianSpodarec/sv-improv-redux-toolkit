import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store'

import App from './App';
import config from './config';


// import { Provider } from 'react-redux'

import 'lib/src/_styles/generic.scss';
import './_styles/main.scss';

import { initApi } from 'lib/src/utils/api';
import ErrorBoundary from 'lib/src/pages/error/ErrorBoundary';

const { API_URL } = config;
initApi(API_URL);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
    <ErrorBoundary>

        <Provider store={store}>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </BrowserRouter>

        </Provider>    
    
    </ErrorBoundary>
    </React.StrictMode>
);
