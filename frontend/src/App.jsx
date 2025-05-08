import React, {  useState } from 'react'
import Navbar from './Components/Navbar'
import toast, { Toaster } from 'react-hot-toast';
import Banner from './Components/Banner'
// import.meta.env.VITE_MAIN_BACKEND_URL
console.log(import.meta.env.VITE_MAIN_BACKEND_URL)
const App = () => {
  const [darkmode,setdarkmode] = useState(()=>{
    return JSON.parse(localStorage.getItem('Theme') || false)
  })
  const notify = () => toast.error('we are still working on this functionality we will complete the work as soon as possible');
  
  // const datafromchld =(data)=>{
  //   setdarkmode(data)
  //   console.log(data)
  //   localStorage.setItem('Theme',JSON.stringify(data))
  // }

  // w-screen h-screen bg-richblack-900 overflow-hidden
  // <div className={`${darkmode ? 'bg-richblack-900' : 'bg-light'} overflow-hidden w-screen h-screen`}>

  return (
    <div className={`${darkmode ? 'bg-richblack-900' :'bg-richblack-900'} overflow-hidden w-screen h-screen`}>
        <Navbar setColors={notify} darkmode={darkmode}></Navbar>
        <Banner></Banner>
        <Toaster position="top-right" reverseOrder={true}/>
    </div>
  )
}

export default App