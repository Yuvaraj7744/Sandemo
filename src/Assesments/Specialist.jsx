import React from 'react'
import t1 from '../Images/t1.jpg'
import t2 from '../Images/t2.jpg'
import t3 from '../Images/t3.jpg'
import t4 from '../Images/t4.jpg'
import t5 from '../Images/t5.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin  } from "react-icons/fa";
import { FaTwitter  } from "react-icons/fa";

const details = [
  {
    id: 1,
    img: t1,
    name: "Cory Zamora",
    work: "Marketing Specialist",
    content: "Etiam porta sem magna malesuada mollis.",
    social: [
      <FaLinkedin />,
      <FaTwitter/>
    ],
  },
  {
    id: 2,
    img: t2,
    name: "Coriss ambady",
    work: "Financial analyst",
    content: "Aenean eu lea quam Pellentesque ornare.",
    social: [
      <FaLinkedin />,
      <FaTwitter/>
    
    ],
  },
  {
    id: 3,
    img: t3,
    name: "nikolas brooten",
    work: "sales manager",
    content: "Donec oranare elit quam porta gramvi at eget.",
    social: [
      <FaLinkedin  />,
      <FaTwitter />
    ],
  },
  {
    id: 4,
    img: t4,
    name: "jackie sanders",
    work: "investment planner",
    content: "Nullam risus eget uran mollis ornare vel eu leo.",
    social: [
      <FaLinkedin  />,
      <FaTwitter />
    ],
  },
  {
    id: 5,
    img: t5,
    name: "Tina Geller",
    work: "assistant buyer",
    content: "Vivamus sagittis lacus vle aurges lorsdes.",
    social: [
      <FaLinkedin  />,
      <FaTwitter />,
    
    ],
  },
  

];

const Specialist = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row max-w-[1100px] mx-auto px-5 items-center gap-10 my-30 font-serif">

        <div className="flex flex-col justify-start gap-5 md:ml-0">
          <h2 className="text-gray-500 md:ml-0  md:mt-5 ml-10">Meet the Team</h2>
          <h1 className="font-semibold text-2xl  ml-10 md:text-3xl md:mt-5 md:ml-0 text-gray-800">
            Save your time and money by choosing our professional team.
          </h1>
          <h2 className="text-gray-500 ml-10 md:ml-0">
            Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros tempus porttitor.
          </h2>
              <button className="rounded-full md:ml-0  bg-blue-600 text-white font-semibold px-8 py-2 hover:bg-blue-700 cursor-pointer" >See all the Members </button>

        </div>

        
        <div className='w-[400px] sm:w-[500px] lg:w-[650px] md:w-[600px] '>
          <Slider {...settings}>
            {details.map((data, ind) => (
             <div key={data.id} className="text-center p-5 w-[150px] ">
            <img src={data.img} alt={data.name} className="mx-auto w-[200px] rounded-full" />
            <div className=""> 
              <h1 className="mt-3 font-bold text-secondary text-2xl ">{data.name}</h1>
              <h2 className="text-[13px] text-gray-500  font-bold">{data.work}</h2>
              <p className="mt-2 text-gray-600">{data.content}</p>
              <div className="flex justify-center gap-3 mt-3">
                {data.social.map((icon, index) => (
                <span key={index} className="cursor-pointer hover:-translate-y-1 duration-300 text-2xl">{icon}</span>
            ))}
        </div>
        </div>
     </div>
    ))}
      </Slider>
     </div>
 </div>
    </div>
  );
};

export default Specialist;