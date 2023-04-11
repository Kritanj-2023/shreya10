import React from 'react'
import './Header.css'
import SideNav from './SideNav'
import logo from '../Images/LOGO_KRITANJ.png'
const Header = () => {
    return (
        <div className="bg-white w-full  m-0 fixed z-50">
            <div className="hidden">
                <SideNav />
            </div>
            <div className="flex flex-row flex-wrap items-center justify-between">
                <div className="ml-4 mr-4 text-gray-900 font-bold text-4xl">
                    <img src={logo} className=" w-40 md:w-10 lg:w-40"/>
                </div>
                {/* <div className="name">
                    SUNSHINE
                </div> */}
                <div className="flex flex-row text-black items-center gap-16 p-10 text-base list-none font-bold" >
                    <li className=" hover:text-indigo-900">
                        <a className='home1' href=''>
                            <span>
                                HOME
                            </span>
                        </a>

                    </li>


                    <li className=" hover:text-indigo-900">
                        <a className='about1' href=''>
                            <span>
                                ABOUT US
                            </span>
                        </a>

                    </li>

                    <li className=" hover:text-indigo-900">
                        <a className='service1' href=''>
                            <span>
                                SERVICE
                            </span>
                        </a>

                    </li>

                    <li className=" hover:text-indigo-900">
                        <a className="contact1" href=''>
                            <span>
                                CONTACT
                            </span>
                        </a>

                    </li>

                    <li className="contact">
                        <a className='contact1' href=''>
                            <span>

                            </span>
                        </a>

                    </li>
                </div>


            </div>
        </div>
    )
}

export default Header