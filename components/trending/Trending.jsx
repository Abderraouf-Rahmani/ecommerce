import React from 'react'
import Carousel from '../carousel/Carousel'

const Trending = () => {
  return (
   <>
    <section className="trending">
        <div className="container">
            <h2>Trending</h2>
            <br />
                <Carousel />
        </div>
    </section>
   </>
  )
}

export default Trending