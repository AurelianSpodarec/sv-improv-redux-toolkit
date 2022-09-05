import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from '../../../hooks/useRouteMatch';

function Navigation() {
    const dispatch = useDispatch();
    const location = useLocation();
    const matchRoutes = location.pathname;
    const path = location.pathname.toLowerCase();

    function RenderSection({name, children}:any) {
        return (
            <li className="border-t border-solid border-[#374151] pt-4 my-4">
            <span className="text-[#D1D5Db] uppercase text-xs font-bold flex-1 tracking-wider">{name}</span>
            <ul className="mt-2">
                {children}
            </ul>
        </li>
        )
    }

    function RenderNavItem({name, route}:any) {
        return (
            <li>
                <NavLink to={route} className={`flex  rounded-lg p-2 ${path === route ? 'bg-[#f59e0c] text-white' : 'text-[#D1D5Db] hover:bg-[#374151]'}`}>
                <svg className="h-5 w-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="text-sm">{name}</span>
                </NavLink>
            </li>
        )
    }

    if (path.startsWith('/auth')) return null;
    return (
        <aside className="w-[320px] bg-[#1f2937] h-screen border-r border-solid border-[#374151]">
            
            <header className="h-16 px-8 bg-gray-800 border-b border-solid border-[#374151]">
                <span className="text-white font-bold">React Dashoard</span>
            </header>

            <nav role="nav" className=" h-full p-5">
                <ul role="list">
                    <RenderNavItem name="Dashboard" route="/" />
                    <RenderNavItem name="Landlords" route="/landlords" />
                    <RenderNavItem name="Tenant" route="/tenant" />

                    <RenderSection name="Administration">
                            <RenderNavItem name="Admins" route="/admins" />
                            <RenderNavItem name="Users" route="/users" />
                    </RenderSection>

                    <RenderSection name="Properties">
                            <RenderNavItem name="Houses" route="/" />
                            <RenderNavItem name="Flats" route="/" />
                    </RenderSection>
                </ul>
            </nav>

        </aside>
    )
};

export default Navigation;
