import CustomRoutes from './routes';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import { Outlet } from 'react-router-dom';
// import useGlobalRedirect from 'lib/src/hooks/useGlobalRedirect';
// import useDarkMode from 'lib/src/hooks/useDarkMode';

const App: React.FC = () => {
    
    return (
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
    );
};

export default App;
