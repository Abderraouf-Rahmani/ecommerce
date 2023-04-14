import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";
import ActionButton from "../buttons/ActionButton";

const FeaturedBanner = ({ featuredBanner }) => {
  return (
    <section id="banner" className="featured-banner-section">
      <div className="container">
        <div className="featured-banner-container">
          <div className="featured-left">
            <h2 className="banner-title">{featuredBanner.title}</h2>
            <p className="featured-desc">{featuredBanner.desc}</p>
            <ActionButton text="SHOP NOW" link="/category/premium" />
          </div>
          <div className="featured-right">
            <img
              src={urlFor(featuredBanner.image)}
              alt=""
              className="banner-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
