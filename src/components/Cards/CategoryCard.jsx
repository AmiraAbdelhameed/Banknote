import React from 'react'

const CategoryCard = ({ image, title }) => {

  return (

    <div className="card">
      <img src={image} alt="" srcset="" />
      <h3>{title}</h3>
    </div>

  )
}

export default CategoryCard
