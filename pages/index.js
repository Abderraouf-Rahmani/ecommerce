import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroBanner from '../components/heroBanner/HeroBanner'
import Products from '../components/products/Products'
import FeaturedBanner from '../components/featuredBanner/FeaturedBanner'
import Trending from '../components/trending/Trending'

export default function Home() {
  return (
<>
<Navbar />
<HeroBanner />
<Products />
<FeaturedBanner />
<Trending />
</>    
  )
}
