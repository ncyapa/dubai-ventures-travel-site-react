import React, { useState } from 'react'

import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import sliderImg1 from '../assets/slider-assets/pexels-denys-gromov-4813613.jpg'
import sliderImg2 from '../assets/slider-assets/pexels-bubi-bubi-2867769.jpg'
import sliderImg3 from '../assets/slider-assets/pexels-mart-production-8869383.jpg'
import sliderImg4 from '../assets/slider-assets/pexels-the-lazy-artist-gallery-1089645.jpg'
import sliderImg5 from '../assets/slider-assets/pexels-maria-charizani-6317614.jpg'


const ImageSlider = () => {

    const slides = [
        {
            url: sliderImg1,
            title: 'slider image 1',
        },
        {
            url: sliderImg2,
            title: 'slider image 2',
        },
        {
            url: sliderImg3,
            title: 'slider image 3',
        },
        {
            url: sliderImg4,
            title: 'slider image 4',
        },
        {
            url: sliderImg5,
            title: 'slider image 5',
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0)

    const previousSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1
        const newIndex = isLastSlide ? 0 : currentIndex+1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }


  return (

    <>
        <div className='py-16 sm:mt-64 lg:mt-16'>
        <h3 className='text-2xl md:text-3xl font-bold text-center pb-8'>"Moments of Delight"</h3>
            <div className='max-w-[1400px] h-[580px] w-full px-4 relative group mx-auto'>
                <div
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                    style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
                ></div>

                <div
                    className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'
                >
                    <BsChevronCompactLeft size={30} onClick={previousSlide}/>
                </div>

                <div
                    className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'
                >
                    <BsChevronCompactRight size={30} onClick={nextSlide}/>
                </div>
            
                <div
                    className='flex top-4 justify-center py-2'
                >
                    {slides.map((slide, slideIndex) => (
                        <div className='text-xl cursor-pointer hover:text-slate-400' key={slideIndex} onClick={ ()=>goToSlide(slideIndex)}>
                            <RxDotFilled />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </>
    
  )
}

export default ImageSlider