import React, { useRef } from 'react';

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

import { DownerGroupLogo } from '../assets';

export default function Example() {

    const CompanyEmail = "fraser@fhcl.nz"; 

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const redirectCustomerToEmail = () => {
        // Get the values from the input fields
        const FirstName: string = firstNameRef.current?.value || '';
        const LastName = lastNameRef.current?.value || '';
        const CustomerEmail = emailRef.current?.value || '';
        const CustomerPhoneNumber = phoneNumberRef.current?.value || ''; 
        const Subject = `INQUIRY: ${FirstName} ${LastName}`;
        const Body = messageRef.current?.value || '';

        // Encode the subject and body for the URL
        const encodedSubject = encodeURIComponent(Subject);
        const encodedBody = encodeURIComponent(`${Body}\n\n--------\n Customer's Name: ${FirstName} ${LastName}\n Customer's Email: ${CustomerEmail}\n Customer's Phone Number: +64${CustomerPhoneNumber}`);

        // Construct the mailto link
        const mailtoLink = `mailto:${CompanyEmail}?subject=${encodedSubject}&body=${encodedBody}`;

        // Optionally, you can also open the default mail client with the generated link
        window.location.href = mailtoLink;
    }

    return (
        <div id="contact-us" className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 overflow-hidden scale-100 rotate-180">
                <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>

            <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl ">Let’s talk about your project</h2>
                <p className="mt-2 text-lg text-center leading-8 text-gray-600">
                    We help companies and individuals with all kinds of projects.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:mt-20">
                <div className="flex gap-5 flex-col justify-start">
                    <form action="#" method="" className="max-w-xl md:mx-auto">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        ref={firstNameRef}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        ref={lastNameRef}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Your Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        ref={emailRef}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-3 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        >
                                            <option>+64</option>
                                        </select>
                                    </div>
                                    <input
                                        id="phone-number"
                                        name="phone-number"
                                        type="tel"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        ref={phoneNumberRef}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                        ref={messageRef}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="button"
                                onClick={redirectCustomerToEmail}
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col gap-8 justify-center pb-16">
                    <img alt="Downer group logo" src={DownerGroupLogo} className="max-h-20" loading="lazy"/>
                    <blockquote className="py-5 px-20 text-lg font-semibold text-center leading-6">
                        “Fraser takes the time to understand the needs of his clients and works tirelessly to ensure they are met. He is a pleasure to work with and I would recommend him to anyone looking for a reliable and professional contractor.”
                    </blockquote>

                    <figcaption className="px-8 flex flex-row gap-5 justify-center">
                        <img 
                            alt="Profile picture of person" 
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=96&amp;h=96&amp;q=80" 
                            className="rounded-full size-12"
                            loading="lazy"
                        />
                        <div>
                            <div className="font-semibold">
                                Brenna Goyette
                            </div>
                            
                            <div className="font-light text-gray-500">
                                CEO of Workcation
                            </div>
                        </div>
                    </figcaption>
                </div>


            </div>

        </div>
    )
}
