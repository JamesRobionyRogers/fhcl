import React from 'react'; 

import Card from '../components/Card'; 

import { Demolition, Earthworks, ForestryRoads, PlantHire, Rail, RetainingWallsAndPiling, VegetationManagement } from "../assets/servicesImages";

export default function Services() {

    const ServicesImagesFolder = "./src/assets/servicesImages";

    const ServicesImages = [
        { path: Demolition, title: "Demolition", desc: "FHCL cover a wide range of demolition needs, from ripping up concrete paths to 3-4 story buildings/dwellings."},
        { path: Earthworks, title: "Earthworks", desc: "From your back lawn dig out to small developments, cut to fills and any general site works."},
        { path: RetainingWallsAndPiling, title: "Retaining Walls & Piling", desc: "FHCL can construct a wide range of retaining and piling methods."},
        { path: ForestryRoads, title: "Forestry Roading", desc: "FHCL covers the lower north island for your forestry roading requirements."},
        // { path: Rail, title: "Rail", desc: "FHCL work alongside various reputable companies on railways in the region."},
        { path: VegetationManagement, title: "Vegetation Management", desc: "FHCL's team can cater to your vegetation management and removal needs, including tree felling, de-stumping/grinding, mulching and trimming."},
        // { path: PlantHire, title: "Plant Hire", desc: "FHCL offer plant and operator hire for works within the region."},
    ]

    return (
        <div id="services" className="bg-white py-8 ">
            <div className="flex flex-col gap-10 mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
                    Services
                </h2>

                <div className="sm:hidden mx-auto">
                    {
                        ServicesImages.map((imageObj, index) => {
                            return <Card key={index} props={imageObj} aspectRatio="2/1.25" />
                        })
                    }
                </div>

                <div className="hidden sm:grid gap-5 mx-0 max-w-none grid-cols-3">
                    {
                        ServicesImages.map((imageObj, index) => { 
                            if (index > 2) return; 
                            return <Card key={index} props={imageObj} aspectRatio="4/3" />
                        })
                    }                       
                </div>
                {/* <div className="hidden sm:grid gap-5 mx-0 max-w-none grid-cols-2"> */}
                <div className="hidden sm:flex flex-flow gap-5 justify-between">
                    {
                        ServicesImages.map((imageObj, index) => {
                            if (index <= 2) return; 
                            return <Card key={index} props={imageObj} aspectRatio="4/2" className="!max-w-xl basis-3/6"/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}