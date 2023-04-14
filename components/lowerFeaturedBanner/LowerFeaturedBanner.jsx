import React from "react";
import { urlFor } from "../../lib/client";
import ActionButton from "../buttons/ActionButton";

const LowerFeaturedBanner = ({ bannerBottom }) => {
  return (
    <section id="banner" className="featured-banner-section">
      <div className="container">
        <div className="featured-banner-container">
          <div className="featured-right">
            <img
              src={urlFor(bannerBottom.image)}
              alt=""
              className="banner-img"
            />
          </div>
          <div className="featured-left">
            <h2 className="banner-title">{bannerBottom.title}</h2>
            <p className="featured-desc">{bannerBottom.desc}</p>
            <ActionButton text="SHOP NOW" link="/category/all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerFeaturedBanner;
