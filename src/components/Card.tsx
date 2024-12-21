import React from 'react'; 
import clsx from 'clsx';

interface CardProps {
    props: {
        path: string;
        title: string;
        desc: string;
    };
    aspectRatio: string;
    className?: string;
}
    
export default function Card({props, aspectRatio, className}: CardProps) {
    
    const {path, title, desc} = props

    return (
        <div className={clsx(className, "max-w-sm")}>
            
            <div style={{aspectRatio: aspectRatio}}>
                <img src={path} alt="" className="w-full h-full object-cover" loading='lazy'/>
            </div>
            <div className="py-2">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </h1>
                <p className="mb-3 font-normal text-gray-700">
                    {desc}
                </p>
            </div>
        </div>
    )
}