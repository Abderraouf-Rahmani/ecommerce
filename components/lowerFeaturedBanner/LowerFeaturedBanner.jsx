import React from 'react'
import ActionButton from '../buttons/ActionButton'

const LowerFeaturedBanner = () => {
  return (
    <section id='banner' className="featured-banner-section">
        <div className="container">
            <div className="featured-banner-container">
                <div className="featured-right">
                    <img src="https://www.ikea.com/images/kallax-solution-with-some-storage-solutions-cd61e45dc18370ebd5492ee36b41ccab.png" alt="" className="banner-img" />
                </div>
                <div className="featured-left">
                    <h2 className="banner-title" >Comfortable & <br /> Elegante Living</h2>
                    <p className="featured-desc">
                        Lorem ipsum dolor sit amet, consectetur a, consectetur quae tempore dolorum? Aperiam, quisquam exercitationem ipsam rerum laudantium voluptatum incidunt.
                    </p>
                    <ActionButton text='SOPE NOW' link='#banner' />
                </div>
            </div>
        </div>
    </section>
    
  )
  
}

export default LowerFeaturedBanner