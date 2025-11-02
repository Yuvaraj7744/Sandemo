import React from 'react';
import Slider from "react-slick"
import p10 from "../Images/p10.jpg";
import p11 from "../Images/p11.jpg";
import p12 from "../Images/p12.jpg";
import p13 from "../Images/p13.jpg";
import p14 from "../Images/p14.jpg";
import p15 from "../Images/p15.jpg";
import p16 from "../Images/p16.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const images=[p10,p11,p12,p13,p14,p15,p16];

const Slick = () => {
  const NextArrow =({onclick})=>(
    <div
    onClick={onclick} className='absolute right-[-30px] top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100'>
 <FaArrowRight />

    </div>  )
    const PrevArrow =({onclick})=>(
    <div
    onClick={onclick} className='absolute left-[-30px] top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100'>
<FaArrowLeft />
    </div>  
    )
  const settings={
    dots:true,
    infinite:true,
    speed:600,
    slidesToShow:3,
    slidesToScroll:1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows:true,
    autoplay:false, 
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:1,

        },
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
        },
      },
    ],
  }
  return (
    <div className='w-3/4 mx-auto mt-10'>
      <Slider {...settings}>
        {images.map((image,index)=>(
          <div key={index} className='px-3'>
            <img src={image} className='rounded-2xl w-full h-[400px] object-cover'/>
          </div>
        ))}
      </Slider>
      
    </div>
  )
}

export default Slick;