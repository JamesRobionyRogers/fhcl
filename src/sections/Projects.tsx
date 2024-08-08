import React from 'react'; 
import { useState } from 'react';

// import RetainingWall01 from "../assets/projectsImages/IMG071852.jpg";
import { Image01, Image02, Image03, Image04, Image05, Image06, Image07, Image08, Image09, Image10, Image11 } from "../assets/projectsImages";

export default function Projects() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const ProjectImages = [
        { path: Image01, width: 1},
        { path: Image02, width: 1},
        { path: Image03, width: 2},
        { path: Image04, width: 1},
        { path: Image05, width: 2},
        { path: Image06, width: 1},
        { path: Image07, width: 2},
        { path: Image08, width: 1},
        { path: Image09, width: 2},
        { path: Image10, width: 1},
        { path: Image11, width: 2},
    ]

    // Assign the width of the window to the variable width
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    });


    return (
        <div id="projects" className="bg-white py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
                    Projects
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 grid-rows-1 items-center gap-6 sm:max-w-xl sm:grid-cols-5 sm:grid-rows-2 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-8">
                    {
                        ProjectImages.map((imageObj, index) => {

                            let { path, width } = imageObj;

                            if (windowWidth < 640 && index > 5) return; 
                            if (windowWidth < 1024 && index > 6) return; 


                            if (width == 1) {
                                return (
                                    <div key={index} className="col-span-1 w-full h-full aspect-square">
                                        <img
                                            alt=""
                                            src={path}
                                            className={`w-full h-full object-cover`}
                                        />
                                    </div>
                                )
                            }

                            return (
                                <div key={index} className="col-span-2 w-full h-[131px]">
                                    <img
                                        alt=""
                                        src={path}
                                        className={`w-full h-full object-cover`}
                                    />  
                                </div>
                            )
                        })
                    }                       
                </div>
            </div>
        </div>
    );
}