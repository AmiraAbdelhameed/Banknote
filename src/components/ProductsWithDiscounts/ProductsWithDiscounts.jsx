import React from 'react'
import DiscountCard from '../Cards/DiscountCard'

const ProductsWithDiscounts = () => {
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
    ]
    return (
        <>
            <div className="container section-continer pt-16 ">
                <div className="title flex items-center justify-between">
                    <h2 className='text-2xl py-8'>Products With Discounts</h2>
                    <button className='text-gray-500 border-2 border-gray-500 py-1 px-2 '>Timer </button>
                </div>
                <div className="content grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4 border-2 border-primary-bold rounded-[4px] p-6">
                    <div className='discount-col flex flex-col gap-4'>
                        <img src="./images/discount/discount1.png" alt="" srcset="" />
                        <img src="./images/discount/discount2.png" alt="" srcset="" />
                        <img src="./images/discount/discount3.png" alt="" srcset="" />
                    </div>
                    <div className='flex flex-row gap-4 md:flex-col flex-wrap justify-center '>
                        {products.map((product) => (
                            <DiscountCard name={product.productName} image={product.productImage} amount={product.amount}
                                price={product.productPrice} rate={product.rate} type={product.type}
                            />
                        ))}
                    </div>
                    <div className='flex flex-row gap-4 md:flex-col flex-wrap justify-center '>
                        {products.map((product) => (
                            <DiscountCard name={product.productName} image={product.productImage} amount={product.amount}
                                price={product.productPrice} rate={product.rate} type={product.type}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsWithDiscounts
