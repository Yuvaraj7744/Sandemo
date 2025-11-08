import React from 'react'
import about12 from "../Images/about12.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Vedio = () => {
  return (
    <div className='font-serif'>
        <div className='md:grid  md:grid-cols-2 items-center md:gap-10 md:px-20 mt-10'>
          <div className='flex justify-self-center items-center'>
                        <img src={about12}   className=" w-[400px] lg:w-[600px] h-auto  rounded-2xl mt-10  md:mr-20 " />   

          </div>
             <div className=' sm:ml-0  mt-10'>  
                <p className='text-gray-500 ml-10  md:ml-0 mt-10'>WHO ARE WE?</p>
                <h1 className='font-semibold text-2xl  ml-10 md:text-3xl md:mt-10  md:ml-0 text-gray-800 mt-10 '>Company that believes in the power of creative strategy. </h1>
                <p className='mt-8  md:ml-0    text-gray-500  md:text-lg  ml-10 '>
                   Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
                </p>
                <div className='md:grid md:grid-cols-2 md:mt-5 mt-5'>
                <p className='flex items-center p-2  gap-2  ml-8 md:ml-0 '> <IoMdCheckmarkCircleOutline className='text-blue-400 text-2xl' />Aenean eu leo quam ornare curabitor blandit tempus.</p>
                <p className='flex items-center p-2  gap-2 ml-8 md:ml-0 '> <IoMdCheckmarkCircleOutline  className='text-blue-400 text-2xl'/>Nullam quis risus eget urna mollis ornare donec elit.</p>
                <p className='flex items-center p-2  gap-2 ml-8  md:ml-0'> <IoMdCheckmarkCircleOutline className='text-blue-400 text-2xl' />Etiam porta sem malesuada magna mollis euismod.</p>
                <p className='flex items-center ml-8  gap-2 p-2 md:ml-0'> <IoMdCheckmarkCircleOutline className='text-blue-400 text-2xl' />Fermentum massa vivamus faucibus amet euismod.</p>
            </div>
            </div>

       </div>
           

     </div> 

  )
}

export default Vedio