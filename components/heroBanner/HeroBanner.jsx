import React from 'react'

const HeroBanner = () => {
  return (
    <>
     <div className="home-header">
      <div className="container">
        <div className="home-header-container">
          <div className="featured header-one">
            <img className='header-img' src="" alt="featured our best seller" />
            <h2 className="featured-title">Live comfortably</h2>
          </div>
          <div className="featured header-two">
          <h2 className="featured-title">HW Skincare</h2>
          </div>
          <div className="featured header-four">
          <h2 className="featured-title">Kitchen & <br /> Dining</h2>
          </div>
          <div className="featured header-four-low">
          <h2 className="featured-title">Fashion</h2>
          </div>
        </div>
      </div>

     </div>
    </>
  )
}

export default HeroBanner