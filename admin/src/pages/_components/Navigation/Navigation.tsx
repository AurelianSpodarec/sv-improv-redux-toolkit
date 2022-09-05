import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Navigation() {
    const dispatch = useDispatch();
    const location = useLocation();
    const path = location.pathname.toLowerCase();
    if (path.startsWith('/auth')) return null;

    return (
        <aside className="w-[320px] bg-[#1f2937] h-screen border-r border-solid border-[#374151]">
            
            <header className="h-16 px-8 bg-gray-800 border-b border-solid border-[#374151]">
                <span className="text-white font-bold">React Dashoard</span>
            </header>

            <nav className=" h-full p-6">
                <ul role="list">
                    <li>
                        <NavLink to="/" className="flex text-[#D1D5Db]">
                        <svg className="h-5 w-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        <span className="text-sm">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <span>Administration</span>
                        <ul>
                        <li>
                            <NavLink to="/admins" className="flex text-[#D1D5Db]">
                            <svg className="h-5 w-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                            <span className="text-sm">Admin</span>
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/users" className="flex text-[#D1D5Db]">
                            <svg className="h-5 w-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                            <span className="text-sm">Users</span>
                            </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </aside>
    )
}

export default Navigation
