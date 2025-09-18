import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { BiRepost } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Icons = () => {
  return (
    <>
      <div className="account flex gap-2">
        <button className='secondNavbar-buttons'> 
            <IoPersonOutline />
            Account
        </button>
        <button className='secondNavbar-buttons'> 
            <BiRepost />
        </button>
        <button className='secondNavbar-buttons'> 
            <FaRegHeart />
            Wishlist
        </button>
        <button className='secondNavbar-buttons'> 
          <IoCartOutline />
            Cart
        </button>
      </div>
    </>
  )
}

export default Icons
