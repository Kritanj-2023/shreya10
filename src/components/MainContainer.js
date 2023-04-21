import React,  { useEffect, useRef, useState } from 'react'
import Profile from './Profile.js'
import ProfileHeader from './Header/ProfileHeader.js'
import Profile_detail_con from './Profile_detail_con.js'
import { useStateValue } from "../context/StateProvider";

const MainContainer = () => {
  const [{ details }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  return (
    <div>
      <ProfileHeader/>
      <Profile scrollValue={scrollValue}
          flag={true}
          data={details} />
      {/* <Profile_detail_con/> */}
    </div>
  )
}

export default MainContainer