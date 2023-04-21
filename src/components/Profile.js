import React from 'react'
import ProfileHeader from './Header/ProfileHeader'
import technolgy from './Images/tehnolgy.jpg'
import { useStateValue } from "../context/StateProvider";


const Profile = ({flag, data }) => {
  console.log(data);
  const [{ details }, dispatch] = useStateValue();
  return (
    <>
     <div
     
      className={`w-full flex items-center  scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
     

      <div>
        <div className='flex flex-wrap  gap-8 md:p-1 md:gap-0 lg:p-12 lg:gap-8 space-x-2 w-full bg-white  rounded-lg overflow-hidden mx-auto '>
          {data && data.map((details)=>(
            <div key={details.id}
              className="card  min-w-sm border border-gray-100 bg-purple-100   transition-shadow shadow-xl hover:shadow-xl min-w-max">

              <div className="w-full card__media"><img src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg" className="h-48 w-96" /></div>
              <div className="  card__media--aside "></div>
              <div className="flex items-center p-4">
                <div className="relative flex flex-col items-center w-full">
                  <div
                    Name="h-24 w-24  md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                    <img className="h-24 w-24 md rounded-full relative m-4" src={details?.imageURL} alt="img" />
                    <div className="absolute"></div>
                  </div>
                  <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                    <span className="text-md whitespace-nowrap text-gray-800 font-semibold">{details.name}</span><span className="text-md whitespace-nowrap text-gray-600">{details.name}</span>
                    <p className="text-sm text-gray-500">
                      {details.branch}
                    </p>
                    <div className="py-2 flex space-x-2">
                      <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-700 text-purple-700 hover:border-purple-800 hover:border-purple-800 px-4 py-1 flex items-center hover:shadow-lg">
                        <span className="mr-2">
                        </span>
                        FOLLOW
                        <span className="ml-2">
                        </span>
                      </button>
                      <button  className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                        <span className="mr-2"><svg height="20" width="20" viewBox="0 0 32 32" className="fill-current text-red-100"><path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path></svg>
                      </span>JOb Details<span className="ml-2"></span></button>
                    </div>
                    <div
                      className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                      <span className="text-center px-2"><span className="font-bold text-gray-700">{details.passout_year}</span>
                      <span className="text-gray-600"> Pass out</span></span>
                      <span className="text-center px-2"><span className="font-bold text-gray-700">{details.Job_offer}</span>
                      <span className="text-gray-600"> job offer</span></span>
                      <span className="text-center px-2"><span className="font-bold text-gray-700"></span>
                      <span className="text-gray-600"> Department</span></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )
          )}
            
         

        </div>

      </div>
      </div>
    </>
  )
}

export default Profile