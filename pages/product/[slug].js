import React from 'react'
import FeaturedBanner from '../../components/featuredBanner/FeaturedBanner'
import HeroBanner from '../../components/heroBanner/HeroBanner'
import Products from '../../components/products/Products'
import Trending from '../../components/trending/Trending'

const Home = () => {
  return (
    <>
        <HeroBanner />
        {/* <Products /> */}
        <FeaturedBanner />
        {/* <Trending /> */}
    </>
  )
}

export default Home