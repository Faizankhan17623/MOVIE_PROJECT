import React from 'react'

const Listing = () => {
  return (
    <div className='text-white w-full h-[500px] border-2'>
      
        {/* /This is the first section */}
        <div className='border-2 text-white h-[100px] px-4'>
          <div>
            <p className='pl-8'>Latest Movies Released</p>
            <span></span>
          </div>
          <div></div>
        </div>

        {/* This is the second section */}
        <div>
          <div>
            <p>Most Rated Movies</p>
            <span></span>
          </div>
          <div></div>
        </div>

        {/* This is the third section */}
        <div>
          <div>
            <p>Most Liked Movies</p>
            <span></span>
          </div>
          <div></div>
        </div>


        {/* This is the fourth section */}
        <div>
          <div>
            <p>Most Liked Theatres</p>
            <span></span>
          </div>
          <div></div>
        </div>

    </div>
  )
}

export default Listing