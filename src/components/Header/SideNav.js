import React from 'react'
import { MdViewSidebar } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './SideNav.css'


// or

const SideNav = () => {
  return (
    <div>
      <a id="nav-expand" href="#">
        <span class="icon icon-menu"></span>&nbsp;
       
      </a>
      <nav>
        <a id="nav-collapse" href="#">
          <span class="icon icon-cross"></span>
        </a>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">About</a>
      </nav>
    </div>
  )
}

export default SideNav

