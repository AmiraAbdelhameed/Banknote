import React from 'react'
import Hero from '../components/Hero/Hero'
import Grocery from '../components/Grocery/Grocery'
import Cleaning from '../components/Cleaning/Cleaning'
import Beauty from '../components/Beauty/Beauty'
import HouseholdSupplies from '../components/HouseholdSupplies/HouseholdSupplies'
import BeautySupplies from '../components/BeautySupplies/BeautySupplies'
import FurnitureSupplies from '../components/FurnitureSupplies/FurnitureSupplies'
import CleaningSupplies from '../components/CleaningSupplies/CleaningSupplies'
import ProductsWithDiscounts from '../components/ProductsWithDiscounts/ProductsWithDiscounts'

const Home = () => {
  return (
    <>
      <Hero />
      <Grocery />
      <ProductsWithDiscounts /> 
      <HouseholdSupplies />
      <BeautySupplies />
      <FurnitureSupplies />
      <Beauty />
      <CleaningSupplies />
      <Cleaning />
    </>
  )
}

export default Home
