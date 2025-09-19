import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

const BottomFooter = () => {
    return (
        <>
            {/* bottom footer */}
            <div className="copyrights container section-continer  bg-white py-8 flex items-center justify-between flex-wrap">
                <p className='text-gray-500 '>Copyright 2025 <span className='text-primary-bold'>Banknote</span> All rights reserved.</p>
                <div className="download flex items-center gap-2">
                    <p>Download App</p>
                    <img src="./images/footer/image google.png" alt="" srcset="" />
                    <img src="./images/footer/image App store.png" alt="" srcset="" />
                    <div className="arrow bg-primary-bold p-4 rounded-[50%] text-[xl] md:text-2xl"><IoIosArrowUp /></div>
                </div>
            </div>
        </>
    )
}

export default BottomFooter
