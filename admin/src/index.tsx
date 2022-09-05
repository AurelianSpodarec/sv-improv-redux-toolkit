import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store'


import App from './pages/App';
import './_styles/styles.scss';

import ModalProvider from './context/modal/modalContext';
 

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>

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
    
    </React.StrictMode>
)