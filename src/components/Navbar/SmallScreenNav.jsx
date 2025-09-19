// import React from 'react'
// import { MdOutlineMenu } from "react-icons/md";

// const SmallScreenNav = () => {
//     return (
//         <>
//             <nav className='bg-secondary'>
//                 <div className="container mx-auto flex  justify-between  items-center h-[60px]   ">

//                     <img src="./images/Logo.png" alt="" srcset="" className='h-[70px]' />
//                     <div className="links">
//                         <div className="icon text-3xl text-primary-bold">
//                             <MdOutlineMenu />
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default SmallScreenNav
import React, { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Categories from "./secondNavbar/Categories";
const SmallScreenNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-secondary">
                <div className="container mx-auto flex justify-between items-center h-[60px]">
                    <img src="./images/Logo.png" alt="logo" className="h-[70px]" />

                    <div
                        className="icon text-3xl text-primary-bold cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    >
                        <MdOutlineMenu />
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed inset-0  bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <MdClose
                        className="text-3xl cursor-pointer text-primary-bold"
                        onClick={() => setIsOpen(false)}
                    />
                </div>

                <ul className="flex flex-col space-y-4 px-6">
                    <li>
                        <Link to="/" className="text-lg font-medium hover:text-primary-bold">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-lg font-medium hover:text-primary-bold">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-lg font-medium hover:text-primary-bold">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-lg font-medium hover:text-primary-bold">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-lg font-medium hover:text-primary-bold">
                            Orders
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/" className="flex gap-1 items-center">White Mode <IoIosArrowDown /></NavLink>
                    </li>
                    <li className="flex gap-1 items-center">
                        English <IoIosArrowDown />
                    </li>
                    <li>
                        <NavLink to="/">Track order</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Become a supplier</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">WishList</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Account</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SmallScreenNav;
