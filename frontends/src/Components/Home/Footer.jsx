import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast'

const Footer = () => {

    const [email,setemail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() 
        toast.success("Email sent")
        console.log(email)   
        setemail('') 
    }


  return (
    <div className='w-full h-fit bg-grey-100 flex justify-center items-center'>
        <div className='w-[900px] h-20   flex justify-around items-center '>

            <div className='font-inter text-black'>
                <h1>New Updates</h1>
                <p>Stay Upto Date</p>
            </div>
            <div className=''>
                <form className='text-black gap-3'>
                    <p>Enter your Email To Get New Updates</p>
                    <input type="email" placeholder='Enter Email' name='email' id='email' className="emaail" required onChange={(e)=>{setemail(e.target.value)}} value={email} className='border w-[700px] input_box rounded-l-4xl h-[40px]'  /> <button type='submit' onClick={handleSubmit} className='relative right-7 rounded-2xl border w-[10px] iinput_buttons'><FaSearch /></button>
                </form>
            </div>

        </div>

        <div className=''>

        </div>


    </div>
  )
}

export default Footer