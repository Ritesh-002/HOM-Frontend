import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import ServiceCard from './ServiceCard'
import { dummyServices } from '../Data/dummyServices'


const Services = () => {
    const [services, setServices] = useState(dummyServices)
    const [currIdx, setCurrIdx] = useState(0)

    const handleLeftArrClick = () => {
        if (currIdx == 0) {
            setCurrIdx(prevIdx => dummyServices.length - 1)
        } else {
            setCurrIdx(prevIdx => prevIdx - 1)
        }
    }
    const handleRightArrClick = () => {
        if (currIdx == dummyServices.length - 1) {
            setCurrIdx(prevIdx => 0)
        } else {
            setCurrIdx(prevIdx => prevIdx + 1)
        }
    }
    return (
        <div className='flex items-center justify-center gap-5'>
            <FaAngleLeft onClick={handleLeftArrClick} className='cursor-pointer' />
            <ServiceCard services={services} currIdx={currIdx} />
            <FaAngleRight onClick={handleRightArrClick} className='cursor-pointer' />
        </div>
    )
}

export default Services