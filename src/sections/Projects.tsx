import React from 'react'; 

export default function Projects() {

    const ProjectImagesFolder = "./src/assets/projectsImages";

    const ProjectImages = [
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 1},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 1},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 2},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 1},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 2},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 1},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 2},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 1},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 2},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 1},
        {path: "./src/assets/projectsImages/IMG0000.jpg", width: 2},
    ]

    return (
        <div id="projects" className="bg-white pt-8 pb-24 sm:pt-8 sm:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Projects
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-6 sm:max-w-xl sm:grid-cols-5 sm:grid-rows-2 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-8">
                    {
                        ProjectImages.map((imageObj, index) => {

                            let { path, width } = imageObj;

                            if (width == 1) {
                                return (
                                    <div key={index} className="col-span-1 w-full h-full">
                                        <img
                                            alt=""
                                            src={path}
                                            className=" w-full h-full object-cover"
                                        />

                                    </div>
                                )
                            }

                            return (
                                <div key={index} className="col-span-2 w-full h-[131px]">
                                    <img
                                        alt=""
                                        src={path}
                                        className=" w-full h-full object-cover"
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