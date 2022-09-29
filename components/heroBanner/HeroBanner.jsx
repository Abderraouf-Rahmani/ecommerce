import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";
const HeroBanner = ({ hero }) => {
  return (
    <>
      <div className="home-header">
        <div className="container">
          <div className="home-header-container">
            <Link href="/category/furniture">
              <div className="featured header-one">
                <div className="header-img-container">
                  <h2 className="featured-title">{hero?.bigSqr?.title}</h2>
                </div>
                <img
                  className="header-img"
                  src={urlFor(hero.bigSqr?.image)}
                  alt="featured our best seller"
                />
              </div>
            </Link>
            <Link href="/category/skin care">
              <div className="featured header-two">
                <div className="header-img-container">
                  <h2 className="featured-title">{hero.tallRect.title}</h2>
                </div>
                <img
                  className="header-img headerimg-two"
                  src={urlFor(hero.tallRect.image)}
                  alt="featured our best seller"
                />
              </div>
            </Link>
            <Link href="/category/kitchen">
              <div className="featured header-four">
                <div className="header-img-container">
                  <h2 className="featured-title">{hero.topLittleSqr.title}</h2>
                </div>
                <img
                  className="header-img"
                  src={urlFor(hero.topLittleSqr.image)}
                  alt="featured our best seller"
                />
              </div>
            </Link>
            <Link href="/category/electronics">
              <div className="featured header-four-low">
                <div className="header-img-container">
                  <h2 className="featured-title">
                    {hero.bottomLittleSqr.title}
                  </h2>
                </div>
                <img
                  className="header-img"
                  src={urlFor(hero.bottomLittleSqr.image)}
                  alt="featured our best seller"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
