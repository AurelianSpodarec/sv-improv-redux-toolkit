import { useLayoutEffect, useRef, useState } from "react";
import Container from "../../../../components/atoms/Container";
import MainLayout from "../../../components/Layouts/MainLayout";


const tabs = [
    { name: 'Settings', slug: 'settings', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  , current: false },
    { name: 'Tenants', slug: 'tenants', href: '#', icon: <svg className="h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
  </svg>, current: false },
    // { name: 'Tenant', slug: 'tenant', href: '#', icon: '', current: false },
    { name: 'EPC Rating', slug: 'epcRating', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  , current: false },
    { name: 'Potential Improvements', slug: 'potentialImprovements', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
  </svg>
  , current: true },
  ]

  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]


  const improvements = [
    { type: 'Solar Panels', installementCost: '£4000 - £6000', yearlySavings: '£50', isUpgraded: true },
    { type: 'Solar Water', installementCost: '£750 - £5900', yearlySavings: '$260', isUpgraded: false },
    { type: 'Heated water pump', installementCost: '£12000 - £16000', yearlySavings: '£185', isUpgraded: true },
    // More people...
  ]

  const propertyListing = [
    {
        id: 1,
        firstName: 'Emma',
        lastName: 'Smith',
        email: 'emma@hotmail.com',
        mobile: '075792384',
        moveIn: '14/10/2022'
    },
    {
        id: 1,
        firstName: 'Emma',
        lastName: 'Smith',
        email: 'emma@hotmail.com',
        mobile: '075792384',
        moveIn: '14/10/2022'
    },
    {
        id: 1,
        firstName: 'Emma',
        lastName: 'Smith',
        email: 'emma@hotmail.com',
        mobile: '075792384',
        moveIn: '14/10/2022'
    },
    {
        id: 1,
        firstName: 'Emma',
        lastName: 'Smith',
        email: 'emma@hotmail.com',
        mobile: '075792384',
        moveIn: '14/10/2022'
    },
]

function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
}

function PropertyView() {

    const [currentTab, setCurrentTab] = useState('home');

    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedPeople, setSelectedPeople] = useState([])

    useLayoutEffect(() => {
        const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < propertyListing.length
        setChecked(selectedPeople.length === propertyListing.length)
        setIndeterminate(isIndeterminate)
        // checkbox.current.indeterminate = isIndeterminate
    }, [selectedPeople])

    function toggleAll() {
        setSelectedPeople(checked || indeterminate ? [] : propertyListing)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    return (
        <MainLayout>
        <div className=" bg-[#f9fafe]">
        {/* <div className="max-w-[1500px] mx-auto"> */}

            {/* <Container>
            <header className="mb-8">

                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-bold text-3xl">Property</h1>
                        <span className="text-md">London, 413 Quack Street, Flowers Paw</span>
                    </div>
                    <div>
                        <div className="flex justify-center  bg-green-500 h-10 w-10 rounded-lg">
                            //You quality for a rating of: A
                        </div>  
                            
                    </div>
                </div>

            </header>
            </Container> */}


            <Container>
            <div className="flex flex-row w-full space-x-28">

                <aside className="flex-none -ml-2">
                <header className="mb-8">

<div className="flex justify-between items-center">
    <div>
        <div className="flex    ">
            {/* <svg className="h-8 w-8 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg> */}
        <h1 className="font-bold text-3xl">Property</h1>
        </div>
        <span className="text-md">London, 413 Quack Street, Flowers Paw</span>
    </div>
    <div>
        {/* <div className="flex justify-center  bg-green-500 h-10 w-10 rounded-lg">
            A {/* //You quality for a rating of: A */}
        {/* </div>   */}
            
    </div>
</div>

</header>
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                        Select a tab
                        </label>
                        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                        <select
                        id="tabs"
                        name="tabs"
                        className="block w-full rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                        defaultValue={tabs.find((tab) => tab.current).name}
                        >
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                        </select>
                    </div>

                    <div className="hidden sm:block">
                    <nav className="flex flex-col space-y-1" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                            key={tab.name}
                            href={tab.href}
                            onClick={() => setCurrentTab(tab.slug)}
                            className={classNames(
                                tab.slug === currentTab ? 'bg-[#defde8] text-green-900' : 'text-gray-700 hover:text-gray-900',
                                'px-3 py-2 font-medium text-lg rounded-md'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                            
                            >
                                <div className="flex space-x-2">
                                    <div  className={classNames(
                                tab.slug === currentTab ? 'fill-current text-green-900' : '',
                                ''
                            )}>{tab.icon}</div>
                                    <span>{tab.name}</span>
                                </div>
                        
                            </a>
                        ))}
                    </nav>
                    </div>
                </aside>
                            

                <section className="w-full border-l border-solid border-gray-200">
                


                {
                    currentTab === 'settings' &&

                    <div className="bg-white rounded-lg px-4 sm:px-6 lg:p-8">
                
                    <div className="overflow-hidden sm:rounded-lg">

                    <div className="mb-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Property Details</h3>
                        {/* <p className="mt-1 max-w-2xl text-md text-gray-500">Property details</p> */}
                    </div>

                    <div className="border-t border-gray-200 mb-4 pt-8">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-lg font-medium text-gray-500">City</dt>
                            <dd className="mt-1 text-md text-gray-900">Manchester</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-lg font-medium text-gray-500">County</dt>
                            <dd className="mt-1 text-md text-gray-900">Manchestershire</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-lg font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-md text-gray-900">Quack Street, Flowers Park</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-lg font-medium text-gray-500">Postcode</dt>
                            <dd className="mt-1 text-md text-gray-900">M50 EE9</dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-lg font-medium text-gray-500">Notes</dt>
                            <dd className="mt-1 text-md text-gray-900">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                            </dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-lg font-medium text-gray-500">EPC Certificate</dt>
                            <dd className="mt-1 text-md text-gray-900">
                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-md">
                                <div className="flex w-0 flex-1 items-center">
                                    
                                    <span className="ml-2 w-0 flex-1 truncate">my_mees_certificate.pdf</span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <a href="#" className="font-medium text-green-600 hover:text-green-500">
                                    Download
                                    </a>
                                </div>
                                </li>
                            
                            </ul>
                            </dd>
                        </div>
                        </dl>
                    </div>
                    </div>
                
                
                    </div>
                }

                {
                    currentTab === 'tenants' &&
<div className="bg-white rounded-lg p-8">


                    <div className="sm:flex sm:items-center mb-6">
                    <div className="sm:flex-auto">
                      <h1 className="text-xl font-semibold text-gray-900">Tenants</h1>
                      {/* <p className="mt-2 text-md text-gray-700">
                        A list of all of the improvements that would give you a C and above for MEES
                      </p> */}
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-md font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Add tenant
                      </button>
                    </div>
                  </div>


                    <div>
                        <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                    <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                    />
                    </th>
                    <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-md font-semibold text-gray-900">
                        First Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        Last Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        Mobile Number
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        Move In
                    </th>
                    
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">


                {propertyListing.map((tenant:any) => (
                    <tr key={tenant.email} className={selectedPeople.includes(tenant) ? 'bg-gray-50' : undefined}>

                    <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedPeople.includes(tenant) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-green-600" />
                        )}
                        <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 sm:left-6"
                        value={tenant.email}
                        checked={selectedPeople.includes(tenant)}
                        onChange={(e) =>
                            setSelectedPeople(
                            e.target.checked
                                ? [...selectedPeople, tenant]
                                : selectedPeople.filter((p) => p !== tenant)
                            )
                        }
                        />
                    </td>



                    <td
                        className={`
                        'whitespace-nowrap py-4 pr-3 text-md font-medium',
                        ${selectedPeople.includes(tenant) ? 'text-green-600' : 'text-gray-900'}
                        `}
                    >
                        {tenant.firstName}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{tenant.lastName}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{tenant.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{tenant.mobile}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{tenant.moveIn}</td>


                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-md font-medium sm:pr-6">
                        <a href="#" className="text-green-700 hover:text-green-900">
                        Edit<span className="sr-only">, {tenant.name}</span>
                        </a>
                    </td>
                  
                    </tr>
                ))}


                </tbody>


                 </table>
                    </div>



                    </div>
                }



                {
                    currentTab === 'tenant' &&

                    <div>
                        Single
                    </div>
                }



                {
                    currentTab === 'epcRating' &&

                    <div>
                        
                    </div>
                }

                {
                    currentTab === 'potentialImprovements' &&
                    
                        // <div className="grid grid-cols-3 gap-4">
                        // <div className="w-full bg-gray-100 border border-gray-200 py-6 px-6 rounded-lg">
                        //         <h2 className="text-xl mb-2 font-bold">Solar Water Heating</h2>
                        //         <div className="flex flex-col">
                        //             <span>Cost: £4,000 - £6,000</span>
                        //             <span>Yeary Savings: £47</span>
                        //         </div>
                        //     </div>
                        //     <div className="w-full bg-gray-100 border border-gray-200 py-6 px-6 rounded-lg">
                        //         <h2 className="text-xl mb-2 font-bold">Solar Water Heating</h2>
                        //         <div className="flex flex-col">
                        //             <span>Cost: £4,000 - £6,000</span>
                        //             <span>Yeary Savings: £47</span>
                        //         </div>
                        //     </div>
                        //     <div className="w-full bg-gray-100 border border-gray-200 py-6 px-6 rounded-lg">
                        //         <h2 className="text-xl mb-2 font-bold">Solar Water Heating</h2>
                        //         <div className="flex flex-col">
                        //             <span>Cost: £4,000 - £6,000</span>
                        //             <span>Yeary Savings: £47</span>
                        //         </div>
                        //     </div>
                        // </div>

                        /* This example requires Tailwind CSS v2.0+ */

  

// {/* <div className="bg-white rounded-lg p-8"></div> */}
      <div className="bg-white rounded-lg px-4 sm:px-6 lg:p-8">
        
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Potential Improvements</h1>
            <p className="mt-2 text-md text-gray-700">
              A list of all of the improvements that would give you a C and above for MEES
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-md font-semibold text-gray-900 sm:pl-6">
                        Type
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold text-gray-900">
                        Installement Cost
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold text-gray-900">
                        Yearly Savings
                      </th>
                      <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-md font-semibold text-gray-900 sm:pr-6">
                        Upgraded
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {improvements.map((improvement) => (
                      <tr key={improvement.email} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-md font-medium text-gray-900 sm:pl-6">
                          {improvement.type}
                        </td>
                        <td className="whitespace-nowrap p-4 text-md text-gray-500">{improvement.installementCost}</td>
                        <td className="whitespace-nowrap p-4 text-md text-gray-500">{improvement.yearlySavings}</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-md text-gray-500 sm:pr-6">
                            {improvement.isUpgraded ? 
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Yes</span> 
                            :
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">No</span>
                            }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
                    }

                    </section>
            </div>
            </Container>




        <Container>


                {/* Have dashboard displaying number of tenants 3/4 */}
                {/* Have other stuff     */}

                


        </Container>



        {/* </div> */}
        </div>
        </MainLayout>
    )
}

export default PropertyView;