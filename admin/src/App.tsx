import Routes from './routes';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
// import useGlobalRedirect from 'lib/src/hooks/useGlobalRedirect';
// import useDarkMode from 'lib/src/hooks/useDarkMode';

const App: React.FC = () => {
    // useGlobalRedirect();
    // const [darkMode] = useDarkMode();
    return (
        <div id="admin-body" className="body">
            <Header />
            <div id="admin-wrapper">
                <Nav />
                <main id="admin-content" className="custom-scroll">
                    <Routes />
                </main>
            </div>
        </div>
    );
};

export default App;
