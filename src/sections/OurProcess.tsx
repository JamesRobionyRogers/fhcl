import React from 'react'; 

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function OurProcess() {

    const PhoneNumberLink = "tel:027 366 5162"

    return (
        <div id="our-process" className="bg-white mx-auto max-w-7xl px-6 py-8 lg:px-8 ">
            <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900 pb-10">
                Our Process
            </h2>

            <ol className="relative border-s border-gray-200">
                <br />
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-12 h-12 text-3xl font-bold bg-white rounded-full -start-6 ring-8 ring-white font-[Oswald]">
                        01
                    </span>
                    <div className="pl-3 pt-2">
                        <h3 className="flex items-center mb-1 text-3xl font-semibold text-gray-900">Contact Us</h3>
                        <p className="mb-4 text-base font-normal text-gray-500">
                            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
                        </p>
                        <div>
                            <a href="#contact-us" className="inline-flex items-center mx-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700-700-700">
                                <EnvelopeIcon className="w-3.5 h-3.5 me-2.5" />
                                Email Us
                            </a>

                            <a href={PhoneNumberLink} className="inline-flex items-center mx-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700-700-700">
                                <PhoneIcon className="w-3.5 h-3.5 me-2.5" />
                                Phone Us
                            </a>
                        </div>
                        <p className="my-4 text-base font-normal text-gray-500">
                            Fraser is your direct point of contact, ensuring clear communication and a quick response to your inquiries. We are here to address your questions, discuss project details, and kickstart the process.
                        </p>
                        
                    </div>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-12 h-12 text-3xl font-bold bg-white rounded-full -start-6 ring-8 ring-white font-[Oswald]">
                        02
                    </span>
                    <div className="pl-3 pt-2">
                        <h3 className="mb-1 text-3xl font-semibold text-gray-900">Arrange a Quote</h3>
                        <p className="text-base font-normal text-gray-500">
                            After our initial conversation, we'll work with you to understand the scope and requirements of your project. We'll then provide you with a detailed and transparent quote, outlining the costs and timelines involved. Our commitment to clarity ensures that there are no surprises - just a comprehensive understanding of what to expect.
                        </p>
                    </div>

                </li>
                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-12 h-12 text-3xl font-bold bg-white rounded-full -start-6 ring-8 ring-white font-[Oswald]">
                        03
                    </span>
                    <div className="pl-3 pt-2">
                        <h3 className="mb-1 text-3xl font-semibold text-gray-900">Get to Work</h3>
                        <p className="text-base font-normal text-gray-500">
                            Once the quote is accepted, it's time to get down to business. Our skilled team will mobilize quickly and efficiently, bringing years of expertise to your project. From demolition and earthworks to forestry roading, rail, retaining walls, vegetation management, and plant hire – we handle it all with precision and professionalism.
                            <br /><br />
                            Throughout the process, we prioritize safety, environmental responsibility, and client satisfaction. Our dedication to quality workmanship and timely delivery sets us apart in the industry.
                            <br /><br />
                            Ready to start your project? Contact Fraser Hyde today!
                            <br /><br />
                        </p>

                        <div className="">
                            <a href="#contact-section" className="inline-flex items-center mx-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700-700-700">
                                <EnvelopeIcon className="w-3.5 h-3.5 me-2.5" />
                                Email Us
                            </a>

                            <a href={PhoneNumberLink} className="inline-flex items-center mx-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700-700-700">
                                <PhoneIcon className="w-3.5 h-3.5 me-2.5" />
                                Phone Us
                            </a>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    )
}