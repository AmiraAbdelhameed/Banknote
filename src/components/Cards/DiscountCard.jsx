import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import StarRating from './StarRating ';

const DiscountCard = ({ name, image, type, price, rate, amount }) => {
        let [counter , setCounter]= useState(0)
  return (
  <div className="card bg-secondary p-3 rounded-[4px] flex relative ">
    <div className="flex-2">
        <img src="./images/discount/Discount Cart.png" alt="" srcset="" className='absolute top-0' />
                <img src={image} alt="" srcset="" className='flex-1' />
    </div>
                <div className="card-content flex-3">
                <h3>{name}</h3>
                <p>{amount}</p>
                <div className="price flex justify-between items-center gap-2">
                    <p className='text-price text-2xl font-price font-bold flex items-center gap-1'><span className='text-[12px]'>EGY</span>{price}</p>
                    <span ><StarRating rating={rate} size={"12px"} /></span>
                </div>
                <div className="buttons flex items-center justify-between">
                    <div className="counter gap-2 flex items-center bg-white py-1 px-2 rounded-[4px] text-gray-400 ">
                        <span className='font-price'>{counter}</span>
                        <div className="arrows flex ">
                            <button className="upper text-gray-400 border-2 border-gray-400 p-1 rounded-tl-[4px] rounded-bl-[4px] " onClick={()=>  setCounter( counter + 1 )}><IoIosArrowUp /></button>
                            <button className="upper text-gray-400 border-2 border-gray-400 p-1 rounded-tr-[4px] rounded-br-[4px]" onClick={()=>  setCounter( counter - 1 )}><IoIosArrowDown /></button>
                        </div>
                    </div>
                    <div className="cart ">
                        <button className='flex items-center border-2 border-primary-bold text-primary-bold py-1 px-2 rounded-[4px]' >Add<IoCartOutline /> </button>
                    </div>
                </div>
                   </div>
            </div>
  )
}

export default DiscountCard
