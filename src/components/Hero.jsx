import React from 'react'
import heroImage from '../assets/hero-assets/pexels-jeshootscom-442579.jpg'

const Hero = () => {
  return (
    <>
        <div className='w-full h-screen'>
            <img 
                className='w-full h-screen top-0 left-0 object-cover'
                src={heroImage} 
                alt="dubai hero image" 
            />

            <div className='w-full h-screen absolute top-0 left-0 bg-black/50'/>

            <div className='w-full h-screen absolute top-0 flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <p>Discover the Allure of Dubai</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl my-2'>Tailored Journeys, Unforgettable Moments</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                        Explore private beaches and opulent getaways in Dubai, where luxury meets tradition, creating unforgettable travel experiences.
                    </p>
                    <button className='bg-white text-black mt-4'>Plan Your Escape Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero