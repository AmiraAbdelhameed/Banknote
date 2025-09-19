import React, { useEffect } from 'react'
import ProductCard from '../Cards/ProductCard'
import useDataStore from '../../zustand/store';

const Cleaning = () => {
        const { products, getProducts, loading, error } = useDataStore();
  
    useEffect(() => {
      getProducts(); 
    }, [getProducts]);
  
    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
        <>
            <div className="container section-continer pt-16">
                <div className="title flex items-center justify-between">

                    <h2 className='text-2xl py-8'>Featured Grocery Products</h2>
                    <button className='text-gray-500 border-2 border-gray-500 py-1 px-2 '>Shop now</button>
                </div>
                <div className="cards flex flex-wrap justify-between items-center gap-4">
                    {products.filter((p)=>(p.type=='cleaning')).slice(0,6).map((product) => (
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
