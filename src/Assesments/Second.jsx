import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdBrowserUpdated } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { RiSecurePaymentLine } from "react-icons/ri";
const Second = () => {
  return (
    <div>

        <div className='mt-5'>
          <p className="  text-gray-500 ml-40 md:text-center   md:mt-20">What we do?</p>
          <h1 className="font-bold  ml-20 font-serif text-2xl md:text-4xl text-gray-900 leading-tight md:text-center md:mt-2 ">The service we offer is specifically <br /> designed to meet your needs.
          </h1>
        </div>
        <div className='md:flex  font-serif justify-center md:text-sm items-center md:ml-10'>
            <div className='flex flex-col justify-center items-center mt-10'>
                <LuPhoneCall className='bg-blue-500 rounded-full p-4 text-5xl text-white ' />
                <h1 className='font-semibold mt-2'>24/7 Support </h1>
                <p className='ml-5 text-gray-500 md:px-3'>Etiam port sem malesuada magna mollis euismod. Donec ullamcorper numma non metus auctor frungilla </p>
                <a href="#" className='flex items-center gap-1 text-blue-600'>Learn More <FaArrowRight /> </a>
            </div>
         <div className='flex flex-col justify-center items-center mt-10'>
                <RiSecurePaymentLine  className='bg-blue-500 rounded-full p-4 text-5xl text-white ' />
                <h1 className='font-semibold mt-2'>Secure Payments </h1>
                <p className='ml-5 text-gray-500'>Etiam port sem malesuada magna mollis euismod. Donec ullamcorper numma non metus auctor frungilla </p>
                <a href="#" className='flex items-center gap-1 text-blue-600'>Learn More <FaArrowRight /> </a>
            </div>
         <div className='flex flex-col justify-center items-center mt-10'>
                <MdBrowserUpdated className='bg-blue-500 rounded-full p-4 text-5xl text-white ' />
                <h1 className='font-semibold mt-2'> Daily Updates </h1>
                <p className='ml-5 text-gray-500'>Etiam port sem malesuada magna mollis euismod. Donec ullamcorper numma non metus auctor frungilla </p>
                <a href="#" className='flex items-center gap-1 text-blue-600'>Learn More <FaArrowRight /> </a>
            </div>
         <div className='flex flex-col justify-center items-center mt-10'>
                <GoGraph  className='bg-blue-500 rounded-full p-4 text-5xl text-white ' />
                <h1 className='font-semibold mt-2'>Market Research</h1>
                <p className='ml-5 text-gray-500'>Etiam port sem malesuada magna mollis euismod. Donec ullamcorper numma non metus auctor frungilla </p>
                <a href="#" className='flex items-center gap-1 text-blue-600'>Learn More <FaArrowRight /> </a>
            </div>
        </div>
    
  
    </div>
    
  )
}

export default Second