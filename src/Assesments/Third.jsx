import React from 'react'
import abouting from "../Images/abouting.jpg";
const Third = () => {
  return (
    <div className='font-serif'>
        <div className='md:grid  md:grid-cols-2 items-center  mt-10'>
          <div className='flex justify-center items-center px-10 py-4 '>
            <img src={abouting}   className=" w-[400px] lg:w-[600px] sm:ml-30 h-auto  rounded-2xl shadow-md md:ml-30" />

          </div>
              <div className=' mt-10 ml-10'>
            <h1 className='font-bold font-serif   text-xl md:text-4xl text-gray-900 leading-tight '> How It Works?</h1>
            <p className='mt-4   text-gray-500  md:text-lg'>So here are three working steps why our <br />
            valued customers choose us.
            </p>
              <div className='flex items-start gap-4 max-w-xl mt-10'>
            <div className='bg-blue-500 text-white rounded-full  w-10 h-10 flex items-center justify-center text-lg font-bold'>1</div>
              <div>
                <h1 className='font-semibold text-lg text-gray-800 '>Collect Ideas</h1>
                <p className='text-gray-500'>Nulla vitae elit libero pharetra augue dapibus.Preasent commodo cursus</p>
              </div>
            </div>     
          <div className='flex items-start gap-4 max-w-xl mt-10'>
            <div className='bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold'>2</div>
              <div>
                <h1 className='font-semibold text-lg text-gray-800 '>Data Analysis </h1>
                <p className='text-gray-500'> Nulla vitae elit libero pharetra augue dapibus.Preasent commodo cursus</p>
              </div>
            </div>  
          <div className='flex items-start gap-4 max-w-xl mt-10'>
            <div className='bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold'>3</div>
              <div>
                <h1 className='font-semibold text-lg text-gray-800 '>Finalize Product</h1>
                <p className='text-gray-500'>Nulla vitae elit libero pharetra augue dapibus.Preasent commodo cursus</p>
              </div>
            </div>    
        </div>
      
        </div>
        

        <div className='text-center mt-15 md:mt-15'>
            <p className='text-gray-500 '>  Latest Project</p>
            <br />
            <h1 className="font-bold  text-xl md:text-4xl text-gray-900 leading-tight md:ml-10">
                Check out some of our awesome 
                project with createive ideas and 
                great design 
            </h1>
        </div>
  
    </div>
  )
}

export default Third;