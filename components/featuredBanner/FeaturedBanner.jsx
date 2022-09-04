import Link from 'next/link'
import React from 'react'
import ActionButton from '../buttons/ActionButton'

const FeaturedBanner = () => {
  return (
    <>
    <section id='banner' className="featured-banner-section">
        <div className="container">
            <div className="featured-banner-container">
                <div className="featured-left">
                    <h2 className="banner-title" >Creative harmonious living</h2>
                    <p className="featured-desc">
                        Lorem ipsum dolor sit amet, consectetur a, consectetur quae tempore dolorum? Aperiam, quisquam exercitationem ipsam rerum laudantium voluptatum incidunt.
                    </p>
                    <ActionButton text='SOPE NOW' link='#banner' />
                </div>
                <div className="featured-right">
                    <img src="https://www.ikea.com/images/kallax-regale-in-verschiedenen-farben-in-weiss-und-schwarz-u-ad4707b7fdae48fe042ff02ed612ff5f.jpg" alt="" className="banner-img" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default FeaturedBanner