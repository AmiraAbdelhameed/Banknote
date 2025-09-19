import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import BottomFooter from './BottomFooter';

const Footer = () => {
    return (
        <>
        <div className="bg-black text-white font-cairo mt-16">
            <div className='container section-continer pt-16 '>
                {/* upper Footer */}
                <div className="upper-section grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8  lg:grid-cols-[1fr_1fr_1fr_1fr_2fr] pb-16 lg:gap-2">
                    <div className="image">
                        <img src="./images/footerLogo.png" alt="" srcset="" />
                    </div>
                    <div className="info flex flex-col gap-4 ">
                        <div className="loction flex gap-8">
                            <span className='text-4xl'>
                                <MdOutlineLocationOn />
                            </span>
                            <p>106 Nile, 5th,6th,9th and 10th floor Ad Doqi A - Dokki - Giza Governorate, Giza, Egypt</p>
                        </div>
                        <div className="phone flex gap-8">
                            <FiPhone />
                            <span>+(20) 1069269754</span>
                        </div>
                        <div className="email flex gap-8">
                            <span className='text-xl'>
                                <MdOutlineMailOutline />
                            </span>
                            <span>info@banknotestore.com</span>
                        </div>
                    </div>
                    <div className="shopSection">
                        <h3 className='text-xl font-bold'>Shop With Us</h3>
                        <ul className='flex flex-col gap-4 mt-8'>
                            <li>
                                Your Account
                            </li>
                            <li>
                                Your Orders
                            </li>
                            <li>
                                Your Address
                            </li>
                        </ul>
                    </div>
                    <div className="helpSection">
                        <h3 className='text-xl font-bold'>Let us Help you</h3>
                        <ul className='flex flex-col gap-4 mt-8'>
                            <li>
                                FAQ
                            </li>
                            <li>
                                Terms of Service
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                Contact Us
                            </li>
                        </ul>
                    </div>
                    <div className="newsSection">
                        <h3 className='text-xl font-bold'>Our Newsletter</h3>
                        <ul className='flex flex-col gap-4 mt-8'>
                            <li>
                                Subscribe to the mailing list to receive updates one the new arrivals and other discounts
                            </li>
                            <li className='border-2 border-primary-bold rounded-[4px] py-1 px-2 flex justify-between'>
                                <input type="text" placeholder='Your email address' className='outline-0' />
                                <button className='bg-primary-bold py-1 px-2 rounded-[4px] '>Subscribe</button>
                            </li>
                            <li>
                                I would like to receive news and special offer
                            </li>

                        </ul>
                    </div>
                </div>
                {/* lower footer */}
                <div className="lower border-t-2 border-white pb-16 flex justify-between items-center">
                    <div className="follow flex gap-4 pt-8 items-center">
                        <h4>Follow us</h4>
                        <ul className='flex gap-4'>
                            <li className='bg-[#4E4E4E] rounded-[50%] w-8 h-8 flex justify-center items-center'><FaFacebookF /></li>
                            <li className='bg-[#4E4E4E] rounded-[50%] w-8 h-8 flex justify-center items-center'><FaInstagram />
                            </li>
                            <li className='bg-[#4E4E4E] rounded-[50%] w-8 h-8 flex justify-center items-center'><FaWhatsapp />
                            </li>
                            <li className='bg-[#4E4E4E] rounded-[50%] w-8 h-8 flex justify-center items-center'><LiaTelegramPlane />
                            </li>
                            <li className='bg-[#4E4E4E] rounded-[50%] w-8 h-8 flex justify-center items-center'><FaLinkedinIn />

                            </li>
                            <li className='bg-[#4E4E4E] rounded-[50%] w-8 h-8 flex justify-center items-center'><FaTiktok />
                            </li>
                        </ul>
                    </div>
                    <div className="payment flex gap-4 pt-8 items-center">
                        <h4>Payment Accepts:</h4>
                        <ul className='flex gap-4'>
                            <li><img src="./images/footer/credit-card.png" alt="" srcset="" /></li>
                            <li><img src="./images/footer/credit-card (1).png" alt="" srcset="" /></li>
                            <li><img src="./images/footer/credit-card (2).png" alt="" srcset="" /></li>
                            <li><img src="./images/footer/credit-card (3).png" alt="" srcset="" /></li>
                            <li><img src="./images/footer/credit-card (4).png" alt="" srcset="" /></li>
                            <li><img src="./images/footer/credit-card (5).png" alt="" srcset="" /></li>
                            <li><img src="./images/footer/credit-card (6).png" alt="" srcset="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Bottom footer */}
             <BottomFooter />
        </>
    )
}

export default Footer
