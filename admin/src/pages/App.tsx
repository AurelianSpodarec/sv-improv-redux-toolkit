import { Outlet } from 'react-router-dom';
import CustomRoutes from '../routes';

import Header from './_components/Header/Header';
import Navigation from './_components/Navigation/Navigation';
import CreateModal from '@components/Modal/CreateModal';

function App() {
    return (
        <>
        <CreateModal /> 

        <div className="flex h-full overflow-hidden">
            <Navigation />
        
            <div className="flex w-auto flex-auto h-full flex-col h-screen">
                <Header />
                <main className="bg-[#111827] overflow-y-auto flex-auto h-auto">
                    <CustomRoutes />
                    <Outlet /> 
                </main>
            </div>

        </div>
        </>
    )
}

export default App