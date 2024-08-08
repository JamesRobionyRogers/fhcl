import React from 'react'; 
import { useState } from 'react';

import {KiwiRailLogo, DownerGroupLogo, WellingtonCityCouncilLogo, } from '../assets'; 

export default function LogoClouds() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const CompanyLogos = [
        KiwiRailLogo,
        DownerGroupLogo,
        WellingtonCityCouncilLogo,
        KiwiRailLogo,
        DownerGroupLogo,
    ]

    // Assign the width of the window to the variable width
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    });

    return (
        <div className="bg-white pt-8 pb-8 sm:pt-8 sm:pb-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Trusted by the some of New Zealand's largest names
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {
                        CompanyLogos.map((path, index) => {

                            if (windowWidth < 640 && index > 1) return;
                            if (windowWidth < 1024 && index > 2) return; 

                            return (
                                <img
                                    key={index}
                                    alt=""
                                    src={path}
                                    width={158}
                                    height={48}
                                    className="saturate-0 col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                />            
                            )
                        })
                    }
                </div>

                <hr className="mt-8 w-[98%] border-gray-200 sm:mx-auto lg:mt-10" />
            </div>
        </div>
    )
}
