import React from 'react'
import { FirstNavbar, SecondNavbar, ThirdNavbar } from './index'
import SmallScreenNav from './SmallScreenNav'


const Navbar = () => {
  return (
    <>
      <div className="nav-in-small lg:hidden">
        <SmallScreenNav />
      </div>
      <div className="nav-in-large hidden lg:block">
        <FirstNavbar />
        <SecondNavbar />
        <ThirdNavbar />
      </div>
    </>
  )
}

export default Navbar
