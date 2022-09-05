import { Link } from 'react-router-dom';

function Header() {

    function Breadcrumb() {
        return (
            <ol>
                <li>
                    <Link to="/">Breadcrumbs</Link>
                </li>
            </ol>
        )
    }

    function SearchBar() {
        return (
            <input  />
        )
    }

    function UserDropdown() {
        return (
            <div>
                <button type="button" className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="user-menu-button" x-ref="button">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                </button>
                <ul>
                    <li>
                        <button>User Name</button>
                    </li>
                    <li>
                        <button>Toggle light mode</button>
                    </li>
                    <li>
                        <button>Sign out</button>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <header className="flex-none w-full bg-gray-800 border-b border-solid border-[#374151] h-16">   
        <div className="flex justify-between items-center mr-10">

            <div>
                <Breadcrumb />
            </div>
            
            <div className="flex">

                <div>
                    <SearchBar />
                </div>

                <UserDropdown />

            </div>

        </div>
        </header>
    );
};

export default Header;
