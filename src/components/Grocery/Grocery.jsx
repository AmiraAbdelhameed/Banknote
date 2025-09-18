import React from 'react'
import ProductCard from '../Cards/ProductCard'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Grocery = () => {
    let products = [
        {
            productName: "Revana Tomato Sauce",
            productImage: "./images/products/tomato.png",
            amount: "800gm",
            productPrice: 150,
            rate: 4,
            type: "grocery"
        },
        {
            productName: "Revana Tomato Sauce",
            productImage: "./images/products/tomato.png",
            amount: "800gm",
            productPrice: 150,
            rate: 4,
            type: "grocery"
        },
        {
            productName: "Revana Tomato Sauce",
            productImage: "./images/products/tomato.png",
            amount: "800gm",
            productPrice: 150,
            rate: 4,
            type: "grocery"
        },
        {
            productName: "Revana Tomato Sauce",
            productImage: "./images/products/tomato.png",
            amount: "800gm",
            productPrice: 150,
            rate: 4,
            type: "grocery"
        },
        {
            productName: "Revana Tomato Sauce",
            productImage: "./images/products/tomato.png",
            amount: "800gm",
            productPrice: 150,
            rate: 4,
            type: "grocery"
        },
        {
            productName: "Revana Tomato Sauce",
            productImage: "./images/products/tomato.png",
            amount: "800gm",
            productPrice: 150,
            rate: 4,
            type: "grocery"
        },

    ]
    return (
        <>
            <div className="container section-continer pt-16">
                <div className="title flex items-center justify-between">
                    <h2 className='text-2xl py-8'>Featured Grocery</h2>
                    <div className="arrows flex gap-4 ">
                        <button className='border-2 border-primary-bold p-1 text-gray-500 text-2xl rounded-[4px]'><IoIosArrowBack /></button>
                        <button className='border-2 border-primary-bold p-1 text-gray-500 text-2xl rounded-[4px]'><IoIosArrowForward /></button>
                    </div>
                </div>
                <div className="cards flex flex-wrap justify-between items-center gap-4">
                    {products.map((product) => (
                        <ProductCard name={product.productName} image={product.productImage} amount={product.amount}
                            price={product.productPrice} rate={product.rate} type={product.type}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Grocery
