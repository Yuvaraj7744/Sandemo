import React from 'react'
import about12 from "../Images/about12.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Vedio = () => {
  return (
    <div className='font-serif'>
        <div className='md:grid  md:grid-cols-2 items-center md:gap-10 md:px-20 mt-10'>
            <img src={about12}   className=" w-[400px] md:w-[500px] h-auto ml-10 rounded-2xl mt-10  md:mr-20" />   
             <div className=' md:ml-0 ml-10 mt-10'>  
                <p className='text-gray-500 ml-10  md:ml-0 mt-10'>WHO ARE WE?</p>
                <h1 className='font-semibold text-2xl  ml-10 md:text-3xl md:mt-5 md:ml-0 text-gray-800'>Company that believes in the power of creative strategy. </h1>
                <p className='mt-4  md:ml-0    text-gray-500  md:text-lg  ml-10 '>
                   Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
                </p>
                <div className='md:grid md:grid-cols-2 md:mt-5 mt-5'>
                <p className='flex items-center p-2 ml-10 '> <IoMdCheckmarkCircleOutline />Aenean eu leo quam ornare curabitor blandit tempus.</p>
                <p className='flex items-center p-2 ml-10  '> <IoMdCheckmarkCircleOutline />Nullam quis risus eget urna mollis ornare donec elit.</p>
                <p className='flex items-center p-2 ml-10 '> <IoMdCheckmarkCircleOutline />Etiam porta sem malesuada magna mollis euismod.</p>
                <p className='flex items-center ml-10 p-2 '> <IoMdCheckmarkCircleOutline />Fermentum massa vivamus faucibus amet euismod.</p>
            </div>
            </div>

       </div>
           

     </div> 

  )
}

export default Vedio