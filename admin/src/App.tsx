import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomRoutes from './routes';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import CreateModal from '@components/Modal/CreateModal';
// import useGlobalRedirect from 'lib/src/hooks/useGlobalRedirect';
// import useDarkMode from 'lib/src/hooks/useDarkMode';

const App: React.FC = () => {

    return (
        <>
            <CreateModal /> 
            <div id="admin-body" className="body">
                <Header />

                <div id="admin-wrapper">
                    <Nav />
                    <main id="admin-content" className="custom-scroll">
                        <CustomRoutes />
                        {/* <Outlet /> */}
                    </main>
                </div>

            </div>
        </>
    );
};

export default App;
