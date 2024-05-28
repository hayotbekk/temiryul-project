import React from 'react'
import "./style.css"
const Header = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
        <nav className=' block w-full shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-white fixed z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 '>
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="#" className='antialiased font-sans text-base font-light leading-relaxed mr-4 cursor-pointer flex justify-start items-center my-0 py-0 text-blue-500'>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 172.000000 135.000000" preserveAspectRatio="xMidYMid meet" class="scale-125"><metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata><g transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M683 1166 c-285 -69 -478 -368 -420 -651 48 -232 217 -403 447 -451
                  181 -38 369 21 505 160 163 165 207 395 119 615 -9 22 -20 41 -25 41 -5 0 -18
                  -18 -29 -39 -16 -31 -18 -46 -10 -66 6 -15 15 -57 21 -94 34 -222 -113 -454
                  -332 -522 -118 -37 -276 -21 -379 39 -195 112 -287 348 -220 563 65 210 282
                  357 496 335 79 -8 163 -37 220 -76 42 -28 48 -29 90 -19 24 6 44 13 44 15 0 3
                  -15 18 -32 34 -43 40 -179 105 -246 119 -69 14 -183 13 -249 -3z"></path><path d="M661 918 c-112 -75 -208 -141 -212 -145 -8 -9 4 -370 14 -379 3 -3
                  98 56 211 132 l206 137 -1 141 c-1 78 -4 166 -8 196 l-6 55 -204 -137z"></path><path d="M1161 974 c-91 -24 -167 -46 -169 -49 -2 -2 18 -15 45 -28 73 -37 89
                  -56 113 -129 12 -38 25 -68 28 -68 7 0 162 303 162 315 0 8 -3 7 -179 -41z"></path><path d="M687 501 l-208 -138 166 -72 c92 -40 173 -70 180 -67 39 14 406 269
                  399 276 -10 9 -311 140 -322 140 -4 0 -101 -62 -215 -139z"></path></g></svg>
          <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit ms-1.5 mt-1">Railway Plan</h6>
          </a>
          <div className="flex  items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
                <li className='block antialiased font-sans text-base leading-relaxed text-blue-gray-900 p-1 font-normal'>
                  <a href="#" className='flex items-center'>BOSH SAHIFA</a>
                </li>
                <li className='block antialiased font-sans text-base leading-relaxed text-blue-gray-900 p-1 font-normal'>
                  <a href="#" className='flex items-center'>TARIXI</a>
                </li>
                <li className='block antialiased font-sans text-base leading-relaxed text-blue-gray-900 p-1 font-normal'>
                  <a href="#" className='flex items-center'>VAZIFA</a>
                </li>
                <li className='block antialiased font-sans text-base leading-relaxed text-blue-gray-900 p-1 font-normal'>
                  <a href="#" className='flex items-center'>RAHBARIYAT</a>
                </li>
                <li className='block antialiased font-sans text-base leading-relaxed text-blue-gray-900 p-1 font-normal'>
                  <a href="#" className='flex items-center'>BOGLANISH</a>
                </li>
                <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">Kirish</button>
              </ul>
            </div>
          </div>
        </div>
        </nav>
      </div>
  )
}

export default Header