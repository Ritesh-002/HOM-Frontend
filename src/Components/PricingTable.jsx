import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { LiaCrosshairsSolid } from 'react-icons/lia'

const PricingTable = () => {
    return (
        <div className='flex flex-col gap-4 items-start justify-start rounded-md p-[1rem] md:w-[50%] shadow-lg h-fit'>
            <div className='border-2 border-black p-[0.5rem] bg-black text-white rounded-md'><LiaCrosshairsSolid className='scale-200' /></div>
            <p className='text-2xl font-bold'>Pro</p>
            <p className='text-sm text-gray-700'>Unleadsh the power of your business with pro plan</p>
            <p className='flex items-center gap-2'><span className='text-3xl font-bold'>50$</span> <span className='text-sm text-gray-700 pt-2'>per month</span></p>
            <div className='w-full px-[1rem] bg-gray-700 h-[0.5px] rounded-lg'></div>
            <ul>
                <li className='flex gap-2 items-center'><FaCheck className='scale-70' />Enhanced analytics</li>
                <li className='flex gap-2 items-center'><FaCheck className='scale-70' />Custom domain</li>
                <li className='flex gap-2 items-center'><FaCheck className='scale-70' />E-Commerce integration</li>
                <li className='flex gap-2 items-center'><FaCheck className='scale-70' />Priority support</li>
            </ul>
            <button className='p-[0.5rem] w-full rounded-md border-2 border-blue cursor-pointer'>Get started</button>
        </div>
    )
}

export default PricingTable