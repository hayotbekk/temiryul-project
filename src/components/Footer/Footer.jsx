import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="bg-[#101C30]">
      <div className='container mx-auto px-5 sm:px-0 pt-10 md:flex md:items-center md:justify-between py-4 md:py-8'>
        <div>
          <p className="text-lg text-gray-600 mr-4">
            2024{' '}
            <a href="#" className="text-blue-600 hover:underline mx-1">
              IT City Academy
            </a>{' '}
            All rights reserved.
          </p>
        </div>
        <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li><a class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter" href="/home"><button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10" type="button"><span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"><i class="fab fa-telegram text-lg"></i></span></button></a></li>
          <li class="ml-4"><a class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github" href="/home"><button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10" type="button"><span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"><i class="fab fa-instagram text-lg"></i></span></button></a></li>
          <li class="ml-4"><a class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook" href="/home"><button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10" type="button"><span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"><i class="fab fa-youtube text-lg"></i></span></button></a></li>
          <li class="ml-4"><a class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook" href="/home"><button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10" type="button"><span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"><i class="fab fa-facebook text-lg"></i></span></button></a></li></ul>
      </div>
    </footer>
  )
}

export default Footer