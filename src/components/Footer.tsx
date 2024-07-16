import React from 'react'; 

export default function Footer() {

    const CompanyName = "Fraser Hyde Contracting Ltd.";
    const CompanyLogoImage = "./src/assets/Logo.svg";
    const CurrentYear = new Date().getFullYear(); 

    const CivilContractorsLink = "https://civilcontractors.co.nz/find-a-contractor/11005/#maptop"; 
    const CivilContractorsMembershipImage = "./src/assets/CCNZMemberLogo.svg";
    
    return (
        <footer className= "bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="grid grid-cols-2 gap-6">
                        <a href="#top" className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={CompanyLogoImage} className="h-12" alt="FHCL Company Logo" />
                        </a>
                        <a href={CivilContractorsLink} className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={CivilContractorsMembershipImage} className="h-14 py-1 saturate-0 invert opacity-80" alt="FHCL Company Logo" />
                        </a>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© {CurrentYear} {CompanyName}™. All Rights Reserved.</span>
            </div>
        </footer>
    ) 
}