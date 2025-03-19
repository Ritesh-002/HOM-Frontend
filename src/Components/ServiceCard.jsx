import React, { useState } from 'react'

const ServiceCard = ({ services, currIdx }) => {

    return (
        <div className='h-[150px] w-full flex gap-5 md:h-[250px] border-2 border-black rounded-md p-[0.5rem] md:p-[1rem] text-black bg-white'>
            <div className='h-full w-[50%]'><img className='h-full w-full object-cover' src="/src/assets/corporate-management-strategy-solution-branding-concept.jpg" alt="" /></div>
            <div className='flex flex-col gap-5 items-start justify-center'>
                <p>{services[currIdx].title}</p>
                <p className=''>{services[currIdx].description}</p>
                <button className='bg-black rounded-md text-center text-white p-[0.5rem] cursor-pointer'>Learn more</button>
            </div>
        </div>
    )
}

export default ServiceCard