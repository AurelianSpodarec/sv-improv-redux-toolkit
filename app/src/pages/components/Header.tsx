import Image from "next/image";
import Link from "next/link";
import Container from "../../components/atoms/Container";

function Header() {
    return (
        <header className="py-5 border-b border-gray-200 mb-10">
        <Container>
        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}

            <nav className="relative z-50 flex justify-between items-center">

                <div className="flex items-center  space-x-10">
                    <Link aria-label="Home" href="/">
                        <div className="w-[200px]">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.43 92.85">
                            <defs>
                            <linearGradient id="linear-gradient" x1="112.69" y1="46.71" x2="445.26" y2="46.71" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#2a9c8e"/>
                                <stop offset="0.1" stop-color="#228e80"/>
                                <stop offset="0.33" stop-color="#137366"/>
                                <stop offset="0.47" stop-color="#0d695c"/>
                                <stop offset="0.64" stop-color="#1a5657"/>
                                <stop offset="0.82" stop-color="#234a54"/>
                                <stop offset="1" stop-color="#264653"/>
                            </linearGradient>
                            <linearGradient id="linear-gradient-2" x1="9.84" y1="84.42" x2="88.65" y2="5.61" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#e76f51"/>
                                <stop offset="0.12" stop-color="#ea7d55"/>
                                <stop offset="0.34" stop-color="#f4a060"/>
                                <stop offset="0.35" stop-color="#f4a261"/>
                                <stop offset="0.52" stop-color="#e9c46a"/>
                                <stop offset="0.84" stop-color="#2a9d8f"/>
                                <stop offset="0.97" stop-color="#127265"/>
                                <stop offset="1" stop-color="#0d685b"/>
                            </linearGradient>
                            </defs>
                            <path className="text-green-600 fill-current" d="M120.66,29.43h-8l0,34h8Zm51,4.43A10.85,10.85,0,0,0,162,28.54a12,12,0,0,0-10.06,5,9.91,9.91,0,0,0-8.77-5,10.41,10.41,0,0,0-8.37,4V29.43h-7.89V63.55h7.89V45.88c0-2.9.17-5.8,1.53-7.74A5.85,5.85,0,0,1,141,35.63a4.46,4.46,0,0,1,4.51,3c.32.72.72,2.25.72,6V63.38h7.89V45.88c0-2.9.16-5.8,1.53-7.74a5.82,5.82,0,0,1,4.66-2.51,4.46,4.46,0,0,1,4.51,3c.32.72.72,2.25.72,6V63.38h7.9v-21C173.41,37.5,172.28,35,171.63,33.86Zm26-5.32a12.65,12.65,0,0,0-10,4.58V29.43h-7.85l-.08,47.7h7.86l.07-17.84a13.39,13.39,0,0,0,10.09,5c8,0,16.36-6.75,16.36-18.15C214,35.37,206.49,28.54,197.6,28.54Zm-1,28.67c-5,0-9.54-3.62-9.54-10.68,0-7.39,4.56-10.93,9.54-10.93,5.69,0,9.38,4.83,9.38,10.85C206,52.31,202.33,57.21,196.64,57.21Zm38.14-28.67a9.05,9.05,0,0,0-4.8,1.12,13.91,13.91,0,0,0-3.29,2.81v-3h-7.86v33.8h7.86V45.73c0-2.25,0-5.46,2.16-7.8a6.13,6.13,0,0,1,4.89-1.84,7.12,7.12,0,0,1,4,1.2l3.2-7.14A11.68,11.68,0,0,0,234.78,28.54Zm23.1,0c-10.18,0-18,7.39-18,17.83s7.85,17.91,18,17.91,18-7.56,18-17.91S268.05,28.54,257.88,28.54Zm0,28.67c-6.17,0-10-4.26-10-10.76,0-7.71,5-10.85,10-10.85s10,3.14,10,10.85C267.9,53,264.05,57.21,257.88,57.21Zm43-27.78-8.65,22.92-8.66-22.92h-8.81l14.61,36.39h5.71L309.7,29.43Zm39.69,17.82c0-3.53-.4-9.79-4.73-14.29A14.5,14.5,0,0,0,325,28.54a15.36,15.36,0,0,0-11.3,4.58A19.85,19.85,0,0,0,308.36,47a18.12,18.12,0,0,0,5,12.92c3.21,3.22,6.89,4.35,11.38,4.35a18.6,18.6,0,0,0,9.94-2.57,17.76,17.76,0,0,0,5.68-6.19l-6.57-3.69a12.06,12.06,0,0,1-3.12,3.69,8.29,8.29,0,0,1-5.37,1.69,8,8,0,0,1-6-2.17,11.21,11.21,0,0,1-2.9-6.83h24.21Zm-23.64-5.46a8.81,8.81,0,0,1,2.4-4.33,8.16,8.16,0,0,1,10.82-.25,8.21,8.21,0,0,1,2.41,4.58Zm37.18,11.12a12.19,12.19,0,0,1-1.75-6.46c0-6,3.68-10.85,9.37-10.85,5,0,9.54,3.54,9.54,10.93,0,7.06-4.57,10.68-9.54,10.68a8.62,8.62,0,0,1-5.27-1.72A10.77,10.77,0,0,1,354.12,52.91Zm-2.58,8.57a15.59,15.59,0,0,0,9.17,2.8A13,13,0,0,0,370.8,59.7v3.53h7.86V29.43H370.8v3.93a12.3,12.3,0,0,0-10-4.82c-8.9,0-16.43,6.74-16.43,17.75A19.4,19.4,0,0,0,349,59.17,32.19,32.19,0,0,0,351.54,61.48Zm52.78-14.95a16,16,0,0,0-4.73-3.13l-4-2c-1.69-.89-2.17-1-2.65-1.36a2.19,2.19,0,0,1-1.13-1.93,2.55,2.55,0,0,1,.73-1.77,3.32,3.32,0,0,1,2.4-.88,5.63,5.63,0,0,1,4.81,2.89l5.85-3.86a11.62,11.62,0,0,0-3.85-4.17,10.49,10.49,0,0,0-6.25-1.77,10.86,10.86,0,0,0-8.25,3.22A10.51,10.51,0,0,0,384.44,39a7.38,7.38,0,0,0,2.41,5.7,16.42,16.42,0,0,0,4.64,2.89l2.89,1.37A10.38,10.38,0,0,1,397.75,51a3.67,3.67,0,0,1,1,2.57,4,4,0,0,1-1.12,2.66,5.23,5.23,0,0,1-6.65-.17,8.7,8.7,0,0,1-1.85-3.21l-6.41,3.05a13.08,13.08,0,0,0,4.33,6.18,11.53,11.53,0,0,0,7.29,2.18c3.53,0,6.81-.89,9.46-3.78a11.27,11.27,0,0,0,3-7.71A8.33,8.33,0,0,0,404.32,46.53Zm32.13-17.1-9.78,19.75-9.61-19.75H407.6L422,57.93l-12.48,19.2h8.85l26.87-47.7ZM117.5,24.31h-4.81V19.48a3.19,3.19,0,0,1,3.19-3.19h4.81v4.82A3.19,3.19,0,0,1,117.5,24.31Z"/>
                            <path className="text-green-600 fill-current" d="M87.27,7V60.16A25.69,25.69,0,0,1,61.58,85.84H16L29.54,72.3H57.2A16.68,16.68,0,0,0,73.88,55.62V13.81H60.81v6.73H38.61A16.84,16.84,0,0,0,21.76,37.38V64.72L8.42,78.06V32.68A25.69,25.69,0,0,1,34.1,7Z"/>
                        </svg>    
                        </div>
                    </Link>
                
                    <div className="hidden md:flex md:gap-x-6">
                        <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/">
                            <span>Home</span>
                        </Link>
                        <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" as="/why-us" href="/landing/WhyUs">
                            <span>Why Us</span>
                        </Link>
                        <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" as="/mees" href="/landing/MEES">
                            <span>MEES</span>
                        </Link>
                        <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" as="/faq" href="/landing/FAQ">
                            <span>FAQ</span>
                        </Link>

                        <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" as="/dashboard/properties" href="/dashboard/Property/PropertyIndex/PropertyIndex">
                            <span>Properties Listing</span>
                        </Link>
                        <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" as="/dashboard/properties" href="/dashboard/Property/PropertyView/PropertyView">
                            <span>Properties view</span>
                        </Link>
                    </div>

                </div>


                <div className="flex items-center gap-x-5 md:gap-x-8">


                <div className="flex space-x-3 items-center">
                    <span>Emma Fitzap</span>
                    <div className="h-12 w-12 rounded-full flex-shrink-0 border border-gray-200">
                        <img className="p-1 h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                    </div>
                </div>
                    {/* <div className="hidden md:block">
                        <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/login">Sign in</a>
                    </div>

                    <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600" href="/register">
                        <span>Get started <span className="hidden lg:inline">today</span></span>
                    </a>

                    <div className="-mr-1 md:hidden">
                        <div>
                            <button className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none" aria-label="Toggle Navigation" id="headlessui-popover-button-:R1p6:" type="button" aria-expanded="false">
                                <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none" strokeWidth="2" strokeLinecap="round">
                                    <path d="M0 1H14M0 7H14M0 13H14" className="origin-center transition"></path>
                                    <path d="M2 2L12 12M12 2L2 12" className="origin-center transition scale-90 opacity-0"></path>
                                </svg>
                            </button>
                        </div>
                    </div> */}
                </div>
                {/* </div> */}

            </nav>

        {/* </div> */}
        </Container>
        </header>
    )
}

export default Header;