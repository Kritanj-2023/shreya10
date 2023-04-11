import React from 'react'
import { createSearchParams } from 'react-router-dom'

const ProfileHeader = () => {
  return (
    <div className='bg-black w-full h-24 m-0 fixed z-50 flex flex-row justify-between ' >
      <div className='rounded-full bg-white w-10 h-10 md:w-5 md:h-5 lg:w-10 lg:h-10  mt-6 ml-4'>

      </div>
      {/* search palane */}
      <div className='rounded-full bg-white  h-10 w-36 md:w-10 mt-6 justify-center align-middle'>
        <input
          type="text"

          placeholder="   Search..."
          className=" rounded-full bg-white w-36 h-10  md:w-20 lg:w-64  align-middle justify-center"
        />
      </div>
      <div className=' bg-white w-28 h-10 md:w-14 md:h-1  mt-6  mr-20'>
      <div className="cate1">
            <select
              
              className=" bg-white w-28 h-10 text-xs"
            >
              <option value="other" className="">
                Select Category
              </option>
              
                  <option
                    
                  >
                 
                  </option>

            </select>
          </div>
      </div>
    </div>
  )
}

export default ProfileHeader