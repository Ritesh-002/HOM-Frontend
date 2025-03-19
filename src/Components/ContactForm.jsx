import React from 'react'

const ContactForm = () => {
    return (
        <div className='flex flex-col gap-6 pt-[2rem] md:pt-0 shadow-lg p-[1rem] rounded-md md:w-[50%]'>
            <p className='text-3xl font-bold'>Contact here</p>
            <form onSubmit={(e) => e.preventDefault()} action="" className='w-full flex flex-col gap-4'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="fullName">Your name</label>
                    <input placeholder='John doe' className=' p-1 border-b-2 w-full focus:border-b-2 focus:outline-none' type="text" id="fullName" name="fullName" />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="fullName">Email</label>
                    <input placeholder='example@email.com' className=' p-1 border-b-2 w-full focus:border-b-2 focus:outline-none' type="text" id="fullName" name="fullName" />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="fullName">Contact</label>
                    <input type={Number} placeholder='999-999-9999' className=' p-1 border-b-2 w-full focus:border-b-2 focus:outline-none' type="text" id="fullName" name="fullName" />
                </div>
                <textarea className='border-2 rounded-md p-1' placeholder='message' type="text" />
                <button type='submit' className='text-white bg-black rounded-xl text-center p-[0.5rem] cursor-pointer'>Send message</button>
            </form>
        </div>
    )
}

export default ContactForm