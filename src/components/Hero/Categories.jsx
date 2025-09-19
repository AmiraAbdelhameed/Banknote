import React from 'react'

const Categories = () => {
    let categories =[
        './images/heroSection/categories/Food.png',
        './images/heroSection/categories/cars.png',
        './images/heroSection/categories/Furniture.png',
        './images/heroSection/categories/House Items.png',
        './images/heroSection/categories/Cleaning Supplies.png',
        './images/heroSection/categories/Accessories.png',
        './images/heroSection/categories/Painting.png',
        './images/heroSection/categories/Carpet.png',
    ]
  return (
    <>
    <div className="images flex justify-center lg:justify-between gap-3 flex-wrap">
    {categories.map((c)=>(
        <img src={c} />
    ))}

    </div>
    </>
    
  )
}

export default Categories
