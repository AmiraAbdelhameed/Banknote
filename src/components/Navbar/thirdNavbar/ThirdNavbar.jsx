import React from 'react'
import { NavLink } from 'react-router'

const ThirdNavbar = () => {
  return (
    <>
   <nav className=' bg-secondary border-t-primary-bold border-t-1 border-b-1 border-b-primary-bold '>
    <div className="container section-continer flex justify-between items-center   ">
      <div className="links flex gap-8 ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Shop</NavLink>
      <NavLink to="/">Contact</NavLink>
      <NavLink to="/">Orders</NavLink>
      {/* before:bg-amber-950 before:w-2.5 before:h-2.5 before:block before:absolute */}
      </div>
      <div className="discount bg-primary-bold text-white py-5 pl-14 px-4 relative flex ">
        <div className="box "></div>
        {/* <div className="box w-[60px] h-full top-0 bg-red-700 absolute left-0"></div> */}
        <p className='pl-2'>Get 20% Discount Now <span className='bg-white text-primary rounded-4xl py-0.5 px-2'>Sale</span></p>
      </div>
    </div>
   </nav>
    </>
  )
}

export default ThirdNavbar

