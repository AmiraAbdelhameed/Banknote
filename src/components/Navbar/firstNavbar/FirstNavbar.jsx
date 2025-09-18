import React from 'react'
import { NavLink } from 'react-router'
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";



const FirstNavbar = () => {
  return (
    <>
      <nav className='bg-primary'>
        <div className="container section-continer flex justify-between items-center py-3">
            <div className="location flex items-center gap-2 ">
              <div className="icon text-3xl "> <HiOutlineLocationMarker /></div>
              <div className="content">
                <div>
                Deliver to: 
                </div>
                <div className='flex items-center'>
                  Egypt <IoIosArrowDown />
                </div>
              </div>
             </div>
            <div className="links flex gap-4">

        <NavLink  to="/" className="flex gap-1 items-center">White Mode <IoIosArrowDown /></NavLink>
        <NavLink  to="/" className="flex gap-1 items-center">English <IoIosArrowDown /></NavLink>
        <NavLink  to="/">Track order</NavLink>
        <NavLink  to="/">Become a supplier</NavLink>
            </div>
        </div>
      </nav>
    </>
  )
}

export default FirstNavbar
