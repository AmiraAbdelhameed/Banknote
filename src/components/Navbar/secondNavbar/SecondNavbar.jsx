import React from 'react'
import Categories from './Categories'
import Search from './Search'
import Icons from './Icons'

const SecondNavbar = () => {
  return (
    <>
      <div className="container section-continer flex  justify-between  items-center  ">

          <img  src='./images/Logo.png' />
    
        <div className="content flex flex-5 justify-between flex-wrap gap-2  ">
          <div className="categories ">
          <Categories />
          </div>
          <div className="search grow ">
          <Search />
          </div>
          <div className="icons  ml-4">
            <Icons />
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondNavbar
