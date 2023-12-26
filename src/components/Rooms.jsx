import React from 'react'
import roomImage1 from '../assets/room-assets/pexels-max-rahubovskiy-6480198.jpg'
import roomImage2 from '../assets/room-assets/pexels-jonathan-borba-3316926.jpg'
import roomImage3 from '../assets/room-assets/pexels-max-rahubovskiy-6238614.jpg'

const Rooms = () => {
  return (

    <>
        <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb[35%] px-4 grid lg:grid-cols-3 gap-4'>

            <div className='relative col-span-2 lg:top-20 lg:col-span-1'>
                <h3 className='text-2xl font-bold'>Serene Living Spaces</h3>
                <p className='pt-4'>
                Experience luxury in our carefully crafted rooms. From elegant furnishings to soothing ambiance, find comfort and style. Whether for relaxation or urban retreat, our rooms offer a perfect blend of opulence and tranquility. Enjoy impeccable service and exquisite surroundings.
                </p>
            </div>

            <div className='grid grid-cols-2 col-span-2 gap-2'>
                <img src={roomImage1} alt="room image 1"
                    className='object-cover w-full h-full'
                />
                <img src={roomImage2} alt="room image 2"
                    className='object-cover w-full h-full row-span-2'
                />
                <img src={roomImage3} alt="room image 3"
                    className='object-cover w-full h-full'
                />
            </div>

        </div>
    </>
    
  )
}

export default Rooms