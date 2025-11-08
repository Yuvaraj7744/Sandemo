import React from 'react'
import one from "../Images/one.png"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='font-serif'>
             <div className=" ml-5 md:flex  md:justify-between  md:items-start md:px-28 md:gap-20 py-10 ">
              <div className='md:w-1/4 md:mt-10'>
                 <img src={one} className="max-h-5 sm:ml-5" alt="" />
                     <p className='mt-5 md:ml-5'>© 2025 Sandbox. All rights reserved.</p>
               <div className='flex mt-3 gap-3 md:mt-6 md:ml-5'>
               <FaInstagram />
               <FaTwitter />
               <FaYoutube />
            <FaWhatsapp />
            </div>
              </div>
           
           
            <div className='md:w-1/4'>
              <h1 className='mt-5 text-2xl md:text-3xl font-semibold text-gray-900'>Get in Touch </h1>
             <p className='text-gray-500 mt-2'> Moonshine St. 14/05 Light City, London, United Kingdom</p>
             <p className='text-gray-500 mt-4'>info@email.com</p>
             <p className='text-gray-500 mt-2'>00 (123) 456 78 90</p>
            </div>
            <div className='md:w-1/4'>
              <h1 className='mt-4 text-2xl md:text-3xl font-semibold text-gray-900'>Learn More</h1>
                <p className='text-gray-500 mt-4'>About us </p>
                <p className='text-gray-500 mt-2'> Our Story </p>
                <p className='text-gray-500 mt-2'> Projects</p>
                <p className='text-gray-500 mt-2'>Terms of Use </p>
                <p className='text-gray-500 mt-2'>Privacy Policy </p>
            </div>
            <div className='md:w-1/4'>
              <h1 className='mt-4 text-2xl md:text-3xl font-semibold text-gray-900 '>Our Newsletter</h1>
              <p className='text-gray-500 mt-2'>Subscribe to our newsletter to get our news & deals devlivered to you </p>
              <div className='flex flex-rwo items-center gap-2 mt-4'>
              <input type="email " placeholder='Email Address' className='w-full md:w-auto px-4 py-2 border-gray-300 rounded-lg focus:outline-none '/>
              <button className='bg-blue-700 mt-4 border-blue-700 cursor-pointer  text-white rounded-r-md  px-3 py-2 md:mt-0'>Join </button>
             </div>    
            </div>
    
             </div>
    </div>
  )
}

export default Footer