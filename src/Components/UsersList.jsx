import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../Redux/Slices/UserSlice.js'
import UserCard from './UserCard'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const UsersList = () => {
    const [currIdx, setCurrIdx] = useState(0)
    const users = useSelector(state => state?.users)
    const dispatch = useDispatch()

    const handleLeftArrClick = () => {
        if (currIdx == 0) {
            setCurrIdx(prevIdx => users?.length - 1)
        } else {
            setCurrIdx(prevIdx => prevIdx - 1)
        }
    }
    const handleRightArrClick = () => {
        if (currIdx == users?.length - 1) {
            setCurrIdx(prevIdx => 0)
        } else {
            setCurrIdx(prevIdx => prevIdx + 1)
        }
    }
    useEffect(() => {
        dispatch(getAllUsers())
        console.log(users)
    }, [])
    return (
        <div className='flex items-center gap-4 justify-center text-sm md:text-xl'>
            {
                users.length > 0 ? <><FaArrowLeft className='cursor-pointer' onClick={handleLeftArrClick} />
                    <UserCard users={users} currIdx={currIdx} />
                    <FaArrowRight className='cursor-pointer' onClick={handleRightArrClick} /></> : <p>Loading...</p>
            }
        </div>
    )
}

export default UsersList