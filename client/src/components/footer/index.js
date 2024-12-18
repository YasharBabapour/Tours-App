import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

import { GiClover } from 'react-icons/gi'
const Footer = () => {
    return (
        <div className='bg-[#202c39] w-full h-24 flex justify-around items-center ' >
            <span className='flex text-third font-bold hover:text-forth'>Design by me <AiOutlineCopyrightCircle size={20} className='self-center ml-1' /></span>
            <p className='font-bold text-third'>1401/07/03 </p>
            <span className=' flex text-third  hover:text-forth font-bold '>Have good day<GiClover size={20} className=' self-center ml-1' /> </span>

        </div>
    )
}

export default Footer