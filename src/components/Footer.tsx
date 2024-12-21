import React from 'react'; 

import { Logo, CCNZMemberLogo } from '../assets';

export default function Footer() {

    const CompanyName = "Fraser Hyde Contracting Ltd.";
    const CurrentYear = new Date().getFullYear(); 

    const CivilContractorsLink = "https://civilcontractors.co.nz/find-a-contractor/11005/#maptop"; 
    
    return (
        <footer className= "bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

                {/* Logo, CCNZ and  */}
                <div className="flex flex-col sm:flex-row gap-5 items-center justify-around">
                    <div className="flex flex-row w-full justify-around sm:justify-normal sm:w-auto gap-6">
                        <a href="#top" className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={Logo} className="h-12" alt="FHCL Company Logo" loading="lazy" />
                        </a>
                        <a href={CivilContractorsLink} className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={CCNZMemberLogo} className="h-14 py-1 saturate-0 invert opacity-80" alt="FHCL Company Logo" loading="lazy" />
                        </a>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-500">
                        <li>
                            <a href="#projects" className="hover:underline me-4 md:me-6">Projects</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:underline me-4 md:me-6">Services</a>
                        </li>
                        <li>
                            <a href="#our-process" className="hover:underline me-4 md:me-6">Our Process</a>
                        </li>
                        <li>
                            <a href="#contact-us" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-400 sm:text-center">© {CurrentYear} {CompanyName}™. All Rights Reserved.</span>
            </div>
        </footer>
    ) 
}