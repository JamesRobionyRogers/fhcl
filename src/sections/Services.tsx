import React from 'react'; 

import Card from '../components/Card'; 

export default function Services() {

    const ServicesImagesFolder = "./src/assets/servicesImages";

    const ServicesImages = [
        { path: "./src/assets/servicesImages/Demolition.jpg", title: "Demolition", desc: "FHCL cover a wide range of demolition needs, from ripping up concrete paths to 3-4 story buildings/dwellings."},
        { path: "./src/assets/servicesImages/Demolition.jpg", title: "Earthworks", desc: "From your back lawn dig out to small developments, cut to fills and any general site works."},
        { path: "./src/assets/servicesImages/Demolition.jpg", title: "Forestry Roading", desc: "FHCL covers the lower north island for your forestry roading requirements."},
        { path: "./src/assets/servicesImages/Demolition.jpg", title: "Rail", desc: "FHCL work alongside various reputable companies on railways in the region."},
        { path: "./src/assets/servicesImages/Demolition.jpg", title: "Retaining Walls & Piling", desc: "From house piles for an extension to steel beam retaining walls, FHCL can drill for all requirements."},
        { path: "./src/assets/servicesImages/Demolition.jpg", title: "Vegetation Management", desc: "FHCL's team can cater to your vegetation management and removal needs, including tree felling, de-stumping/grinding, mulching and trimming."},
        { path: "./src/assets/servicesImages/Demolition.jpg", title: "Plant Hire", desc: "FHCL offer plant and operator hire for works within the region."},
    ]

    return (
        <div id="services" className="bg-white pt-8 pb-24 sm:pt-8 sm:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Services
                </h2>

                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 gap-6 sm:max-w-xl sm:grid-cols-5 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {
                        ServicesImages.map((imageObj, index) => { 
                            if (index > 3) return; 
                            return <Card key={index} props={imageObj} />
                        })
                    }                       
                </div>
                <div className="mx-auto mt-5 grid max-w-lg grid-cols-4 gap-6 sm:max-w-xl sm:grid-cols-5 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {
                        ServicesImages.map((imageObj, index) => {
                            if (index <= 3) return; 
                            return <Card key={index} props={imageObj} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}