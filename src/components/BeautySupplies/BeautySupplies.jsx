import React from 'react'
import CategoryCard from '../Cards/CategoryCard'

const BeautySupplies = () => {
     let categories =[
      {  
        image:'./images/categories/Dinner Sets.png',
        title:'Dinner Sets'
    },
      {  
        image:'./images/categories/Hanging Fork Knife.png',
        title:'Hanging Fork Knife'
    },
      {  
        image:'./images/categories/StorageBoxes.png',
        title:'Storage Boxes'
    },
      {  
        image:'./images/categories/Dutch Oven.png',
        title:'Dutch Oven'
    },
      {  
        image:'./images/categories/Kitchen Items.png',
        title:'Kitchen Items'
    },
      {  
        image:'./images/categories/Drinkware.png',
        title:'Drinkware '
    },

    ]
    return (
        <div className="container section-continer pt-16">
            <div className="title flex items-center justify-between">

                <h2 className='text-2xl py-8'>Beauty </h2>
                     <button className='text-gray-500 border-2 border-gray-500 py-1 px-2 '>Shop All</button>
            </div>
             <div className='flex flex-wrap items-center gap-2 justify-between'>
      {categories.map((category)=>(
            <CategoryCard image={category.image} title={category.title} />
                  ))}
    </div>
        </div>
    )
}
export default BeautySupplies

 


