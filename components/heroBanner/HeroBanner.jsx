import React from 'react'
import ActionButton from '../buttons/ActionButton'
import bannerStyles from './HeroBanner.module.css'

const HeroBanner = () => {
  return (
    <>
      <div className={bannerStyles.banner}>
        <div className="container">
        <div className={bannerStyles.bannerContainer}>
          <div className={bannerStyles.left}>
          <div className={bannerStyles.bannerImgContainer}>
            <img  className={bannerStyles.bannerImg} src="https://ih1.redbubble.net/image.1598710907.5291/ur,backpack_front,square,1000x1000.jpg" alt="Blue back pack" />
          </div>

          </div>
          <div className={bannerStyles.right}>
            <span className={bannerStyles.categoy} >Men Accessories</span>
            <h2 className={bannerStyles.bannerHeading}>Blue Ciel</h2>
            <p className={bannerStyles.bannerDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ActionButton text='Add to cart' link='placeholder' />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default HeroBanner