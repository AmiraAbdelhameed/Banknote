import React, { useEffect } from 'react'
import CategoryCard from '../Cards/CategoryCard'
import useDataStore from '../../zustand/store';

const HouseholdSupplies = () => {
       const { categories, getCategories, loading, error } = useDataStore();

  useEffect(() => {
    getCategories(); 
  }, [getCategories]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

    return (
        <div className="container section-continer pt-16">
            <div className="title flex items-center justify-between">

                <h2 className='text-2xl py-8'>Household Supplies</h2>
                     <button className='text-gray-500 border-2 border-gray-500 py-1 px-2 '>Shop All</button>
            </div>
             <div className='flex flex-wrap items-center gap-2 justify-center lg:justify-between'>
      {categories.filter((c)=>c.type=="Household").map((category)=>(
            <CategoryCard image={category.image} title={category.title} />
                  ))}
    </div>
        </div>
    )
}

export default HouseholdSupplies
