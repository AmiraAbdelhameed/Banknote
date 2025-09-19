import React from 'react'
import Slider from './Slider'
import Sales from './Sales'
import Categories from './Categories'

const Hero = () => {
  return (
    <>
    <div className="bg-secondary ">
      <div className="container section-continer py-8  grid  gap-4 ">
<div className="main-content grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr] ">
    <Slider />
    <Sales />
</div>
<div className="categories">
<Categories />
</div>

      </div>
    </div>
    </>
  )
}

export default Hero
