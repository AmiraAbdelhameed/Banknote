import React from 'react'
import { MdOutlineMenu } from "react-icons/md";

const SmallScreenNav = () => {
    return (
        <>
            <nav className='bg-secondary'>
                <div className="container mx-auto flex  justify-between  items-center h-[60px]   ">

                    <img src="./images/Logo.png" alt="" srcset="" className='h-[70px]' />
                    <div className="links">
                        <div className="icon text-3xl text-primary-bold">
                            <MdOutlineMenu />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SmallScreenNav
