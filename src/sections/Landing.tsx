'use client'

import React from 'react'

import Nav from '../components/Nav'; 

import { LandingPageImage } from '../assets';

export default function Landing() {

    const Slogan = "No job too big or small, we do it all"

    return (
        <div className="relative bg-cover max-h-2xl py-32">
            <img src={LandingPageImage} className="absolute top-0 w-full h-full"/> 
            
            <Nav />

            <div className="relative isolate max-w-7xl mx-auto px-6 pt-14 lg:px-8">

                <div className="mx-auto max-w-2xl py-32 sm:py-0 lg:py-56">
                    <div className="lg:absolute text-right right-10 -bottom-16 max-w-2xl sm:relative">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
                            Fraser Hyde <br /> Contracting Ltd. 
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white">{Slogan}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
