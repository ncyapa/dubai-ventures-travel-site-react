import React from 'react'
import planImage1 from '../assets/plan-assets/pexels-alexey-komissarov-19407884.jpg'
import planImage2 from '../assets/plan-assets/pexels-max-avans-5087057.jpg'
import planImage3 from '../assets/plan-assets/pexels-sergo-karakozov-3684847.jpg'
import planImage4 from '../assets/plan-assets/pexels-christian-konopatzki-11249806.jpg'
import planImage5 from '../assets/plan-assets/pexels-the-lazy-artist-gallery-1302991.jpg'

const Plan = () => {
  return (
    <>
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>

                <div className='w-full h-full p-2 row-span-3 overflow-hidden'>
                    <img src={planImage1} alt="dubai plan image 1"
                        className='object-cover w-full h-full transition-transform duration-500 hover:scale-110'
                    />
                </div>

                <div className='w-full h-full p-2 row-span-2 overflow-hidden'>
                    <img src={planImage2} alt="dubai plan image 2"
                        className='object-cover w-full h-full transition-transform duration-500 hover:scale-110'
                    />
                </div>

                <div className='w-full h-full p-2 row-span-2 overflow-hidden'>
                    <img src={planImage3} alt="dubai plan image 3"
                        className='object-cover w-full h-full transition-transform duration-500 hover:scale-110'
                    />
                </div>
                
                <div className='w-full h-full p-2 row-span-3 overflow-hidden'>
                    <img src={planImage4} alt="dubai plan image 4"
                        className='object-cover w-full h-full transition-transform duration-500 hover:scale-110'
                    />
                </div>

                <div className='w-full h-full p-2 row-span-2 overflow-hidden'>
                    <img src={planImage5} alt="dubai plan image 5"
                        className='object-cover w-full h-full transition-transform duration-500 hover:scale-110'
                    />
                </div>

            </div>

            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>
                Embark on a journey of a lifetime. Immerse yourself in unparalleled experiences, from breathtaking landscapes to cultural wonders.
                </p>
                <p className='pb-6'>
                    Explore the extraordinary with our expertly crafted travel experiences. Our carefully curated trips promise unforgettable moments and seamless adventures for every traveler. Whether you seek the serenity of pristine beaches, the thrill of vibrant city life, or the charm of cultural wonders, our diverse range of destinations caters to your wanderlust. Immerse yourself in rich landscapes, savor local flavors, and create cherished memories. With personalized itineraries and attentive service, we ensure every journey exceeds your expectations.

                </p>
                <div>
                    <button className='border-black mr-4 hover:shadow-xl hover:border-black/20'>Discover Destinations</button>
                    <button className='bg-black text-white border-black hover:shadow-xl hover:bg-black/90'>Reserve Your Adventure</button>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default Plan