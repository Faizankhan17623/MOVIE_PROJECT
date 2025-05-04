import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
const App = () => {
  return (
    <div className='w-screen h-screen bg-richblack-900 overflow-hidden'>
        <Navbar></Navbar>
        <Banner></Banner>
    </div>
  )
}

export default App