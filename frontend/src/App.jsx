import React, {  useState } from 'react'
import Navbar from './Components/Navbar'
import toast from 'react-hot-toast';
import Slider from './Components/Slider'
import Finder from './Components/Finder'

const App = () => {
  const [darkmode,setdarkmode] = useState(()=>{
    return JSON.parse(localStorage.getItem('Theme') || false)
  })
  
  const notify = () => toast.error('Work Under Progress !');
  
  // const datafromchld =(data)=>{
  //   setdarkmode(data)
  //   console.log(data)
  //   localStorage.setItem('Theme',JSON.stringify(data))
  // }

  // w-screen h-screen bg-richblack-900 overflow-hidden
  // <div className={`${darkmode ? 'bg-richblack-900' : 'bg-light'} overflow-hidden w-screen h-screen`}>

  return (
     <div className={`${darkmode ? 'bg-richblack-900' :'bg-richblack-900'} min-h-screen`}>
    <div className="max-w-[1440px] mx-auto px-4 overflow-hidden">
      <Navbar setColors={notify} darkmode={darkmode} />
      <div className="mt-6">
        <Slider />
      </div>
      <Finder />
    </div>
  </div>
  )
}

export default App