import React, { useEffect } from 'react'
import DiscountCard from '../Cards/DiscountCard'
import useDataStore from '../../zustand/store';
import Timer from './Timer';

const ProductsWithDiscounts = () => {
          const { products, getProducts, loading, error } = useDataStore();
  
    useEffect(() => {
      getProducts(); 
    }, [getProducts]);
  
    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
        <>
            <div className="container section-continer pt-16 ">
                <div className="title flex items-center justify-between flex-wrap">
                    <h2 className='text-2xl py-8'>Products With Discounts</h2>
                    <Timer />
                </div>
                <div className="content grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4 border-2 border-primary-bold rounded-[4px] p-6">
                    <div className='discount-col flex flex-col gap-4'>
                        <img src="./images/discount/discount1.png" alt="" srcset="" />
                        <img src="./images/discount/discount2.png" alt="" srcset="" />
                        <img src="./images/discount/discount3.png" alt="" srcset="" />
                    </div>
                    <div className='flex flex-row gap-4 md:flex-col flex-wrap justify-center '>
                        {products.filter((p)=>(p.type=='cleaning')).slice(0,3).map((product) => (
                            <DiscountCard name={product.productName} image={product.productImage} amount={product.amount}
                                price={product.productPrice} rate={product.rate} type={product.type}
                            />
                        ))}
                    </div>
                    <div className='flex flex-row gap-4 md:flex-col flex-wrap justify-center '>
                        {products.filter((p)=>(p.type=='cleaning')).slice(0,3).map((product) => (
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
