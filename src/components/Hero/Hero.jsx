import React from 'react'
import Slider from './Slider'
import Sales from './Sales'
import Categories from './Categories'

const Hero = () => {
  return (
    <>
    <div className="bg-secondary ">
      <div className="container section-continer py-8 min-h-0 lg:min-h-[80vh] grid grid-rows-[1fr_1fr] xl:grid-rows-[3fr_1fr] gap-4 ">
<div className="main-content grid grid-cols-[3fr_1fr] ">
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
