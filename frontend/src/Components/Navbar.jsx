import React, { useEffect, useState } from 'react'
import Image from '../assets/Logo/sd-removebg-preview.png'
import Image2 from '../assets/Logo/sdreincarneted-removebg-preview.png'
import Image3 from '../assets/Logo/dada_bhai_image-removebg-preview.png'
import Image4 from '../assets/Logo/energy.jpg'

import { FaLongArrowAltDown } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = ({setColors,darkmode}) => {

  const [path, setpath] = useState(false)

  useEffect(()=>{
    const currentUrl = window.location.pathname
    setpath(currentUrl)
    // console.log(currentUrl)
  },[])

  const tagsnames = {
    tag:[
      "Adventure",
      "Martial",
      "Superhero",
      "Disaster",
      "Spy Secret",
      "War",
      "Crime"
    ]
  };

  const theatreTypes = {
  types: [
    "Multiplex Theatre",
    "IMAX Theatre",
    "3D Theatre",
    "4DX Theatre",
    "Drive-in Theatre",
    "Single Screen Theatre",
    "Open Air Theatre"
  ]
};
const color_change = ()=>{
  setColors(!darkmode)
  
}
// w-full h-26 flex justify-between items-center border-b-3 text-white
  return (
    <div className='w-full h-26 flex justify-between items-center border-b-3 text-white'>
        <div className='py-4 pl-6'>
          <a href="/" className=''>
            <img src={darkmode?Image:Image3} alt="Main logo" className='h-18 w-[250px] text-black'/>
          </a>
        </div>
        {/* text-white w-[450px]  py-4 px-3 */}
        <div className= 'w-[450px]  py-4 px-3'>
            <ul className={`flex justify-between items-center h-full ${darkmode ? 'text-white' : 'text-black'}`}>
                <a href="/" className={`hover:text-yellow-500 ${darkmode ? 'text-white' : 'text-black'} ${path === '/' ? 'text-yellow-200' : ''}`} >Home</a>
                <a href="/Movies" className={`hover:text-yellow-500 ${darkmode ? 'text-white' : 'text-black'} ${path === '/Movies' ? 'text-yellow-200' : ''} flex gap-0.8 group relative`}>
                Movies <FaLongArrowAltDown className='mt-1.5 text-blue-300 group-hover:rotate-180'/>
  <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white shadow-lg rounded-md mt-3">
    {tagsnames.tag.map((tag, index) => {
      return (
        <a  href={`/${tag}`}
          key={index} 
          className={`py-2 px-4 hover:bg-gray-100 whitespace-nowrap cursor-pointer border-b-2 ${
            darkmode ? 'text-white bg-gray-800' : 'text-black bg-white'
          }`}
        >
          {tag}
        </a>
      )
    })}
  </div>
</a>
                <a href="/Theatres" className={`hover:text-yellow-500 ${darkmode ? 'text-white' : 'text-black'} ${path === '/Movies' ? 'text-yellow-200' : ''} flex gap-0.8 group relative`}>
                Theatres<FaLongArrowAltDown className='mt-1.5 text-blue-300 group-hover:rotate-180'/>
  <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white shadow-lg rounded-md mt-3">
    {theatreTypes.types.map((tag, index) => {
      return (
        <a  href={`/${tag}`}
          key={index} 
          className={`py-2 px-4 hover:bg-gray-100 whitespace-nowrap cursor-pointer border-b-2 ${
            darkmode ? 'text-white bg-gray-800' : 'text-black bg-white'
          }`}
        >
          {tag}
        </a>
      )
    })}
  </div>
                </a>
                <a href="/About" className={`hover:text-yellow-500 ${darkmode ? 'text-white' : 'text-black'} ${path === '/About' ? 'text-yellow-200' : ''}`}>About Us</a>
                <a href="/Contact" className={`hover:text-yellow-500 ${darkmode ? 'text-white' : 'text-black'} ${path === '/Contact' ? 'text-yellow-200' : ''}`}>Contact Us</a>
            </ul>
        </div>

        <div className=' text-white w-[300px]  h-16  flex justify-center items-center'>
          <div className='flex justify-evenly items-center  w-[55%]'>
            <span onClick={color_change}>{darkmode?<FaMoon className='text-white text-3xl'/>:<IoSunnyOutline className='text-black text-3xl'/>}</span>
            <MdOutlineShoppingCart className={`${darkmode ? 'text-white' : 'text-black'} text-3xl`} /> 
            <div className=''>
              <img src={darkmode?Image2:Image4} alt="login logo" className='w-10 fill-black'/>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default Navbar