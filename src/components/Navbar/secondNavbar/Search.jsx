import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <>
      <div className="search flex items-center gap-2 p-2 rounded-[4px] bg-secondary ml-2  justify-between">
        <input type='text' placeholder='Search for products, categories or brands ' className='outline-none flex grow' />
        <button className='bg-primary text-white flex items-center px-4 py-1 gap-1 rounded-[4px]'>Search <IoIosSearch /> </button>
      </div>
    </>
  )
}

export default Search
