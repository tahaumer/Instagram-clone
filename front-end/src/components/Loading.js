import React from 'react'
import InstaIcon from '../media/icons8-instagram.svg'

const loading = () => {
    return (
        <div className='w-full h-[100vh] bg-black flex justify-center items-center'>
            <img src={InstaIcon} alt=''/>
        </div>
    )
}

export default loading