import React from 'react'

const Sales = () => {
  return (
    <>
      <div className='relative' >
        <figure className='relative' >
        <img src="./images/heroSection/sales.png" alt="" srcset="" className='rounded-[8px]' />
        <img src="./images/heroSection/salesWord.png" alt="" srcset="" className='absolute top-4 left-1/3 z-1 ' />
        <div className="class-layer absolute bg-class top-0 w-1/2 h-[100%]"></div>
        <div className="content absolute top-1/3 w-9/12  xl:w-1/2 pl-4 ">
          <h2 className='text-header lg:text-3xl font-heroHeader font-semibold text-[12px]'>Handmade carpets</h2>
          <p className='font-heroHeader font-bold lg:mt-4 text-[10px] lg:text-[16px]'>You can add a vintage touch with a handwoven rug.</p>
        </div>
        </figure>
      </div>
    </>
  )
}

export default Sales
