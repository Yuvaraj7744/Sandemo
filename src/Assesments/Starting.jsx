import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { LuSendHorizontal } from "react-icons/lu";
import  one  from "../Images/one.png";
import { IoMdMenu } from "react-icons/io"; 
import about from "../Images/about.jpg";
import c1 from "../Images/c1.png";
import c2 from "../Images/c2.png";
import c3 from "../Images/c3.png";
import c4 from "../Images/c4.png";
import c5 from "../Images/c5.png";
import c6 from "../Images/c6.png";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";


const Starting = () => {
  const [isopen,setisopen]=useState(false);
  const handletoggle = () =>{
    setisopen(!isopen);
  };
  return (
    <div>
     <div className='bg-blue-500 h-40  w-full  text-white font-serif md:flex md:w-full  items-center md:flex-nowrap   md:h-15 '>
        <p className="flex items-center p-3 gap-2  ml-3 md:grow "> <IoLocationOutline /> Moonshine St.14/05 Light city</p>
        <p className="flex  items-center p-3 gap-2 ml-3 "> <FiPhoneCall /> 00(123) 456 78 90</p>
        <p className="flex items-center p-5  gap-2   ml-3 md:mr-30 md:items-center"> <LuSendHorizontal />sandbox@email</p>
     </div>
   <div className="flex items-center justify-between px-10 py-4 ">
    <img src={one } className='max-h-5'alt="" />
    <div className="hidden md:flex gap-8 text-lg font-semibold text-gray-700">
      <select><option>Demo</option></select>
     <select><option>Pages</option></select>
     <select><option>Projects </option></select>
      <select><option>Blocks</option></select>
      <select><option>Blog</option></select>
      <select><option>Documentation</option></select>
    </div>
    <div className="flex items-center">
      <select ><option >EN</option>
     <option >DN</option>
      <option >ES</option>
      </select>
   <button className="hidden md:block rounded-full bg-blue-500 text-white font-semibold px-8 py-2 ">Contact </button>
   <span  onClick={handletoggle} className="text-2xl md:hidden cursor-pointer "><IoMdMenu/></span>
        {isopen&& (
          <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" 
          onClick={handletoggle}></div>

        
     <div className="bg-black text-white fixed top-0 left-0 h-full w-80  z-50 p-6 ">
      <h1 className="font-serif  font-semibold mx-2">Sandbox</h1>
      <div className="flex flex-col mt-2 ">
        <select><option>Demo</option></select>
     <select><option>Pages</option></select>
     <select><option>Projects </option></select>
      <select><option>Blocks</option></select>
      <select><option>Blog</option></select>
      <select><option>Documentation</option></select>
     </div>
     <p className="mt-100">info@emil.com</p>
     <p>00 (123) 456 78 90 </p>                                    
     <div className="flex mt-2 gap-3">
         <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaWhatsapp />

     </div>
           
     </div>
     </>
     )}
    </div>
   </div>
       <div className=" mt-10 font-serif flex flex-col  items-center justify-between md:flex-row-reverse md:items-center">
      <div>
        <img src={about} className=" w-[400px] md:w-[500px] h-auto rounded-2xl  md:mr-20"   />
      </div>
      <div className="md:w-1/2 ml-10 md:ml-20 mt-10 md:mt-0">
        <h1 className="font-bold   text-2xl md:text-4xl text-gray-900  md:ml-20 ">    We bring solution to make <br />
         life easier for out <br />
          customers.</h1>
          <p  className="mt-4  md:ml-20  text-gray-500  md:text-lg">
            We have considered our solutions to <br/>
             support every stage of your growth.
              </p>
           <div className="flex items-center gap-4 mt-8 ">
      <button className="rounded-full  bg-blue-600 text-white font-semibold px-8 py-2 hover:bg-blue-700 cursor-pointe md:ml-20  gap-10  " >Explore now </button>
      <button className=" rounded-full  bg-white border-blue-400  border-2 text-blue  items-center font-semibold px-8 py-2 gap-10 hover:bg-blue-700 cursor-pointer ">Free trail </button>
      </div>
          </div>
          
      </div>
 
      <div className="grid grid-cols-3  mt-10  lg:flex md:gap-30   items-center  gap-10 ml-5  md:ml-30">
        <img src={c1}  className="w-20 " />
        <img src={c2}  className="w-20"/>
        <img src={c3} className="w-20" />
        <img src={c4} className="w-20" />
        <img src={c5} className="w-20" />
        <img src={c6} className="w-20"/>
      </div>

    </div>
    
  )
}

export default Starting;