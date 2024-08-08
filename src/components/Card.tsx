import React from 'react'; 

export default function Card({props, aspectRatio}) {
    
    const {path, title, desc} = props

    return (
        <div className="max-w-sm">
            
            <div style={{aspectRatio: aspectRatio}}>
                <img src={path} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="py-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                    {desc}
                </p>
            </div>
        </div>
    )
}