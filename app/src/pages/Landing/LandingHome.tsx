import Link from "next/link";
import MainLayout from "../components/Layouts/MainLayout";

function LandingHome() {
    return (
        <MainLayout>
      
            <section id="hero">
            <div className="mx-auto max-w-7xl">

          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                {/* <a href="#" className="inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-gray-700 hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"> */}
                  {/* <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-gray-700">We're hiring</span> */}
                  {/* <span className="ml-4 text-sm">Visit our careers page</span> */}
                  {/* <svg className="ml-2 h-5 w-5 text-gray-500" x-description="Heroicon name: mini/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> */}
  {/* <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path> */}
{/* </svg> */}
                {/* </a> */}
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl md:text-6xl">We help you achieve excellent MEES score</h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.</p>
                <p className="mt-8 text-base font-semibold text-gray-700 sm:mt-10">Used by</p>
                <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div className="flex flex-wrap items-start justify-between">
                    <div className="flex justify-center px-1">
                      <img className="h-9 sm:h-10" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"/>
                    </div>
                    <div className="flex justify-center px-1">
                      <img className="h-9 sm:h-10" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"/>
                    </div>
                    <div className="flex justify-center px-1">
                      <img className="h-9 sm:h-10" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                
              </div>
            </div>
          </div>
        </div>
            </section>

            <section id="services">

            </section>

            <section id="cta">
                
            </section>

        </MainLayout>
    )
}

export default LandingHome;