import { useLocation } from "react-router-dom";

function Header({ children, title }:any) {
    const location = useLocation();
    const pageName = location.pathname.substring(1)

    return (
        <header className="py-8">

            <div className="mt-2 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-semibold capitalize leading-7 text-white sm:text-3xl sm:tracking-tight sm:truncate">
                    {title ? title : pageName}
                </h2>
                </div>

                <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                {children}
                </div>
            </div>

        </header>
    )
}

export default Header;