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
        mees: true,
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

                    <div>
                        <input placeholder="Search Properties" />
                        <button type="button" className="relative inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Create new job</button>
                    </div>
                </div>

                <div className="flex">
                    Sort by City
                    Filter 1
                    Filter 2
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
                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
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









