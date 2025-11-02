import React from 'react'
import abouting from "../Images/abouting.jpg";
const Third = () => {
  return (
    <div className='font-serif'>
        <div className='md:grid  md:grid-cols-2 items-center md:gap-10 md:px-20 mt-10'>
            <img src={abouting}   className=" w-[400px] md:w-[500px] h-auto ml-10 rounded-2xl shadow-md md:mr-20" />
              <div className='ml-10 mt-10'>
            <h1 className='font-bold font-serif   text-xl md:text-4xl text-gray-900 leading-tight md:ml-10'> How It Works?</h1>
            <p className='mt-4  md:ml-10  text-gray-500  md:text-lg'>So here are three working steps why our <br />
            valued customers choose us.
            </p>
              <div className='flex items-start gap-4 max-w-xl mt-10'>
            <div className='bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold'>1</div>
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
        

        <div className='text-center'>
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

export default Third