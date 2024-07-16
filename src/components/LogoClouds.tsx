import React from 'react'; 

export default function LogoClouds() {

    const CompanyLogos = [
        './src/assets/KiwiRailLogo.svg',
        './src/assets/DownerGroupLogo.svg',
        './src/assets/KiwiRailLogo.svg',
        './src/assets/KiwiRailLogo.svg',
        './src/assets/KiwiRailLogo.svg'
    ]

    return (
        <div className="bg-white pt-8 pb-24 sm:pt-8 sm:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Trusted by the some of New Zealand's largest companies
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {
                        CompanyLogos.map((path, index) => {
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
            </div>
        </div>
    )
}
