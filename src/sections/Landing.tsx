'use client'

import React from 'react'

import Nav from '../components/Nav'; 

import { LandingPageImage, LandingPageImage1920x1080, LandingPage960x520, LandingPage480x270} from '../assets';

export default function Landing() {

    const Slogan = "No job too big or small, we do it all"

    return (
        <div className="relative bg-cover max-h-3xl py-32 lg:h-[80vh]">
            <img 
                src={LandingPageImage} 
                srcSet={`${LandingPageImage1920x1080} 1920w, ${LandingPage960x520} 960w, ${LandingPage480x270} 480w`}
                sizes="(min-width: 860px) 98.6vw, (min-width: 780px) 1060px, (min-width: 520px) 804px, calc(-28.5vw + 947px)"
                alt="Landing page background image" 
                className="absolute top-0 w-full h-full object-cover object-left"
            /> 
            
            <Nav />

            <div className="relative flex flex-col items-center align-middle pr-10 max-w-sm mx-auto md:items-end md:mx-0 md:max-w-none lg:absolute lg:bottom-10 lg:right-0">
            {/* <div className="relative isolate max-w-7xl mx-auto px-6 md:pt-14 lg:px-8"> */}

                <div className="h-full relative flex flex-col gap-5">
                    <h1 className="text-right font-bold text-white text-5xl md:text-8xl ">
                        Fraser Hyde <br /> Contracting Ltd. 
                    </h1>

                    <p className="text-right text-lg leading-8 text-white">
                        {Slogan}
                    </p>
                </div>


                {/* <div className="mx-auto max-w-2xl py-0 lg:py-56">
                    <div className=" relative lg:absolute text-right lg:right-10 lg:-bottom-16 max-w-2xl ">
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-8xl">
                            Fraser Hyde <br /> Contracting Ltd. 
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white">{Slogan}</p>
                    </div>
                </div> */}

            </div>
        </div>
    )
}
