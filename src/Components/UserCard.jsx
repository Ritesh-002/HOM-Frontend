import React from 'react'

const UserCard = ({ users, currIdx }) => {
    return (
        <div className='border-2 text-white bg-black rounded-md p-[1rem] w-fit items-center'>
            <p><span className='font-bold'>name:</span> {users[currIdx]?.name}</p>
            <p><span className='font-bold'>username:</span> {users[currIdx]?.username}</p>
            <p><span className='font-bold'>email:</span> {users[currIdx]?.email}</p>
            <p><span className='font-bold'>address:</span> {users[currIdx]?.address.street}, {users[currIdx]?.address.suite}, {users[currIdx]?.address.city}, {users[currIdx]?.address.zipcode}</p>
            <p><span className='font-bold'>phone:</span> {users[currIdx]?.phone}</p>
            <p><span className='font-bold'>website: </span>{users[currIdx]?.website}</p>
            <p><span className='font-bold'>company:</span> {users[currIdx]?.company.name}</p>
        </div>
    )
}

export default UserCard