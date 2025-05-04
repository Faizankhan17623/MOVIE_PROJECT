import React, { useEffect, useState } from 'react'
import Image from '../assets/Logo/sd-removebg-preview.png'
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import Banner from './Banner'
const Navbar = () => {

  const [path, setpath] = useState('')

  useEffect(()=>{
    const currentUrl = window.location.pathname
    setpath(currentUrl)
    console.log(currentUrl)
  },[path])

  const tagsnames = {
    tag:[
      "Adventure",
      "Martial",
      "Superhero",
      "Disaster",
      "Spy/Secret",
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

  return (
    <div className='w-full h-26 flex justify-between items-center'>
        <div className='py-4 pl-6 bg-black'>
          <a href="/">
            <img src={Image} alt="Main logo" className='h-18 w-[250px]'/>
          </a>
        </div>

        <div className='text-white w-[450px]  py-4 px-3'>
            <ul className='flex justify-between items-center h-full '>
                <a href="/" className={`${path === '/' ?'text-yellow-200':'text-black'}`} >Home</a>
                <a href="/Movies" className={`${path === '/Movies' ?'text-yellow-200':'text-black'} flex gap-0.8 group relative`}>
  Movies <FaLongArrowAltDown className='mt-1.5 text-blue-300 group-hover:rotate-180'/>
  <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white shadow-lg rounded-md">
    {tagsnames.tag.map((tag, index) => {
      return (
        <a  href={'/Movies'}
          key={index} 
          className='text-yellow-900 py-2 px-4 hover:bg-gray-100 text-black whitespace-nowrap cursor-pointer border-b-2'
        >
          {tag}
        </a>
      )
    })}
  </div>
</a>
                <a href="/Theatres" className={`${path === '/Theatres' ?'text-yellow-200':'text-black'} flex gap-0.8 group relative`}>
                Theatres<FaLongArrowAltDown className='mt-1.5 text-blue-300 group-hover:rotate-180'/>
  <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white shadow-lg rounded-md">
    {theatreTypes.types.map((tag, index) => {
      return (
        <a  href={'/Movies'}
          key={index} 
          className='text-yellow-900 py-2 px-4 hover:bg-gray-100 text-black whitespace-nowrap cursor-pointer border-b-2'
        >
          {tag}
        </a>
      )
    })}
  </div>
                </a>
                <a href="/About" className={`${path === '/About' ?'text-yellow-200':'text-black'}`}>About Us</a>
                <a href="/Contact" className={`${path === '/Contact' ?'text-yellow-200':'text-black'}`}>Contact Us</a>
            </ul>
        </div>

        <div className='flex justify-around items-center bg-black text-white w-[300px]  h-16 rounded-md'>
          <div className='border-1 px-4 py-1 rounded-2xl  text-black hover:bg-yellow-300 cursor-pointer'>
             <a href="/"> Become a member </a> 
          </div>
          <div className='flex  items-center gap-0.5 cursor-pointer rounded-2xl border-1 px-2 py-1'>
            <IoReorderThreeSharp className='h-10 w-10'/>
            <img src="https://ui-avatars.com/api/?name=Faizan%20Kha1&background=random" alt="logo" className='rounded-3xl w-10' />
          </div>
        </div>
    </div>
  )
}

export default Navbar