import React from 'react'
import co from '../Images/co.png';
import { FaStar } from "react-icons/fa";
const Stars = () => {
  return (
    <div className='px-5 mt-50 my-30 font-serif'>
     <div className='max-w-[1200px] h-[420px] mx-auto px-5 bg-blue-100 rounded-lg relative p-20'>
       <div className='hidden md:block absolute bottom-0 left-8'>
        <img src={co} className='h-[500px]' />     
        </div>
    
     <div className='flex flex-col justify-center items-center md:pl-50'>
     <div className=' flex text-yellow-500 text-2xl'>
     <FaStar />
     <FaStar />
     <FaStar />
     <FaStar />
     <FaStar />
     </div>
      <h1 className='max-w-[600px] text-center text-[20px] leading-9 text-gray-400'>“Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed”</h1>
               <h1 className="font-semibold text-xl mt-2">Coriss Ambady</h1>
                  <h2 className="text-gray-500">FINANCIAL ANALIYST</h2>
       </div>
      </div>
    </div>
  )
}

export default Stars