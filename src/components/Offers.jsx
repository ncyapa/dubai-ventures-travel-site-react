import React from 'react'

const Offers = () => {
  return (
    <>
        <div className='xl:flex-row flex-col max-w-[1400px] m-auto px-4 py-12 flex flex-wrap justify-between'>
          <div className='p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-1'>
            <p className='text-lg font-bold text-gray-700 text-center'>Exclusive Booking Rewards</p>
          </div>

          <div className='p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-1'>
            <p className='text-lg font-bold text-gray-700 text-center'>Best Price Guarantees</p>
          </div>

          <div className='p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-1'>
            <p className='text-lg font-bold text-gray-700 text-center'>Flexible Booking Options</p>
          </div>

          <div className='p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-1'>
            <p className='text-lg font-bold text-gray-700 text-center'>Comprehensive Travel Protection</p>
          </div>
        </div>
    </>
    
  )
}

export default Offers