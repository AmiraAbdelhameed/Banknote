import React from 'react'
import Slider from './Slider'
import Sales from './Sales'
import Categories from './Categories'
import LiveChatIcon from './LiveChatIcon'

const Hero = () => {
  return (
    <>
      <div className="bg-secondary ">
        <div className="container section-continer py-8   ">
          <div className="main-content  grid grid-cols-1  lg:grid-cols-[3fr_1fr] ">
            <Slider />
            <Sales />
          </div>
          <div className="categories py-8">
            <Categories />
          </div>

        </div>
      </div>

    </>
  )
}

export default Hero
