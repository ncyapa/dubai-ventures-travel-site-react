import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";

import siteLogo from '../assets/dvLogo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'scroll';
        }
    }

  return (
    <>
    <header class="fixed top-0 w-full z-10">
        <div className='w-full absolute flex justify-between items-center p-4 bg-black/75'>
            <div className='flex flex-row justify-center'>
                <img src={siteLogo} alt="logo" className='h-[30px] my-auto pr-4 z-20'/>
                <h1 className='text-white font-bold text-2xl z-20 hover:cursor-pointer'>Dubai Ventures</h1>
            </div>
            
            <HiMenuAlt3 onClick={handleNav} className='text-white cursor-pointer z-20' size={25}/>

            <div className={
                nav 
                ? 'w-full h-screen fixed top-0 left-0 text-gray-300 bg-black/80 px-4 py-7 flex-col ease-in duration-300 z-10' 
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10'}>
                <ul className='flex flex-col fixed w-full h-full justify-center items-center'>
                    <li className='font-bold text-3xl p-8 shadow-2xl hover:cursor-pointer hover:text-gray-50'>Home</li>
                    <li className='font-bold text-3xl p-8 shadow-2xl hover:cursor-pointer hover:text-gray-50'>Destinations</li>
                    <li className='font-bold text-3xl p-8 shadow-2xl hover:cursor-pointer hover:text-gray-50'>Reservations</li>
                    <li className='font-bold text-3xl p-8 shadow-2xl hover:cursor-pointer hover:text-gray-50'>Amenities</li>
                    <li className='font-bold text-3xl p-8 shadow-2xl hover:cursor-pointer hover:text-gray-50'>Rooms</li>
                </ul>
            </div>


        </div>
        </header>
    </>
  )
}

export default Navbar