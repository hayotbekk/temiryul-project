import React from 'react'
import "./Hero.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
const Hero = () => {
  
  return (
    <div className='hero'>
      <main>
        <section className=''>
          <div className=''>
            <Splide className=' ' aria-label="My Favorite Images">
            <SplideSlide  >
              <div className="relative h-full">
              <img className='w-full h-[500px]' src="https://pch14.uz/src/landing_page/images/carousel1.jpg" alt="Image 1" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="relative h-full">
              <img className='w-full h-[500px] ' src="https://pch14.uz/src/landing_page/images/carousel2.jpg" alt="Image 2" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="relative h-full ">
              <img className=' w-full h-[500px] object-cover' src="https://pch14.uz/src/landing_page/images/carousel3.png" alt="Image 3" />
              </div>
            </SplideSlide>
          </Splide>
          </div>
        </section>
      </main>
      </div>
  )
}

export default Hero
