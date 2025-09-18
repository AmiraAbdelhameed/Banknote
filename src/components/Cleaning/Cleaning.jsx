import React from 'react'
import ProductCard from '../Cards/ProductCard'

const Cleaning = () => {
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

                    <h2 className='text-2xl py-8'>Featured Grocery Products</h2>
                    <button className='text-gray-500 border-2 border-gray-500 py-1 px-2 '>Shop now</button>
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

export default Cleaning
