import { useLayoutEffect, useRef, useState } from "react";
import Container from "../../../../components/atoms/Container";
import MainLayout from "../../../components/Layouts/MainLayout";

const propertyListing = [
    {
        id: 1,
        address: '413 Clippers Quay, Waterman Walk',
        city: 'Mancester',
        postcode: 'M50 3AF',
        epcCurrent: 'B',
        epcPotential: 'A',
        mees: true,
        lastUpdated: '14/10/2022'
    },
    {
        id: 2,
        address: '708 Clippers Quay, Waterman Walk',
        city: 'London',
        postcode: 'M50 3AF',
        epcCurrent: 'D',
        epcPotential: 'C',
        mees: false,
        lastUpdated: '24/10/2022'
    },
    {
        id: 3,
        address: '41 Quay, Flower Street',
        city: 'Newcastle',
        postcode: 'M50 3AF',
        epcCurrent: 'C',
        epcPotential: 'A',
        mees: true,
        lastUpdated: '14/10/2022'
    },
    {
        id: 4,
        address: '13 Pavement Street, Fireman Cave',
        city: 'Mancester',
        postcode: 'M50 3AF',
        epcCurrent: 'C',
        epcPotential: 'A',
        mees: '',
        lastUpdated: '14/10/2022'
    }
]


function PropertyIndex() {
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedPeople, setSelectedPeople] = useState([])

    useLayoutEffect(() => {
        const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < propertyListing.length
        setChecked(selectedPeople.length === propertyListing.length)
        setIndeterminate(isIndeterminate)
        checkbox.current.indeterminate = isIndeterminate
    }, [selectedPeople])

    function toggleAll() {
        setSelectedPeople(checked || indeterminate ? [] : propertyListing)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    return (
        <MainLayout>

            <Container>
            <header>

            

            </header>
            </Container>


        {/* <div className="max-w-[1500px] mx-auto"> */}
            <Container>
            <div>

                <div className="flex justify-between mb-4">
                    {/* <span className="text-2xl font-bold">{propertyListing.length} property istings</span> */}
                    <span className="text-2xl font-bold">My Properties</span>

                    <div className="flex space-x-4">
                        <button type="button" className="relative flex-none inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-md font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Create new property</button>
                    </div>
                </div>

                <div className="flex mb-8 justify-between">
                <input type="email" name="email-address" id="email-address" className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs" placeholder="Search Properties"/>
                <div className="flex space-x-6 ">

                        
 
                <div>
                    <select
                        id="location"
                        name="location"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-md"
                        defaultValue="London"
                    >
                        <option>Manchester</option>
                        <option>Newcastle</option>
                        <option>Leicester</option>
                    </select>
                </div>


                <div>
      
      <select
        id="location"
        name="location"
        placeholder="Current EPC"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-md"
        // defaultValue="EPC A"
      >
        <option>Current EPC: C</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>
    </div>
    <div>
      
      <select
        id="location"
        name="location"
        placeholder="Current EPC"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-md"
        // defaultValue="EPC A"
      >
        <option>Potential EPC: A</option>
       <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>
    </div>
 
 






</div>


                </div>



            </div>

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
                        Address
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        City
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        Postcode
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        EPC (current)
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        EPC (potential)
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        MEES
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                        Last Updated
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">


                {propertyListing.map((section:any) => (
                    <tr key={section.email} className={selectedPeople.includes(section) ? 'bg-gray-50' : undefined}>

                    <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedPeople.includes(section) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-green-600" />
                        )}
                        <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 sm:left-6"
                        value={section.email}
                        checked={selectedPeople.includes(section)}
                        onChange={(e) =>
                            setSelectedPeople(
                            e.target.checked
                                ? [...selectedPeople, section]
                                : selectedPeople.filter((p) => p !== section)
                            )
                        }
                        />
                    </td>



                    <td
                        className={`
                        'whitespace-nowrap py-4 pr-3 text-md font-medium',
                        ${selectedPeople.includes(section) ? 'text-green-600' : 'text-gray-900'}
                        `}
                    >
                        {section.address}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{section.city}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{section.postcode}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{section.epcCurrent}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{section.epcPotential}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                        {section.mees === "" ? 
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                            </span>
                        :

                            section.mees ? 
                                
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                </span>
                                :
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </span>
                            
                        }


                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{section.lastUpdated}</td>


                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-md font-medium sm:pr-6">
                        <a href="#" className="text-green-600 hover:text-green-900">
                        Edit<span className="sr-only">, {section.name}</span>
                        </a>
                    </td>
                  
                    </tr>
                ))}


                </tbody>


            </table>

            </Container>
            {/* </div> */}


        </MainLayout>
    );
};

export default PropertyIndex;









