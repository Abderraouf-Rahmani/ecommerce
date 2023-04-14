import React, { useEffect, useState } from "react";
import Link from "next/link";
import { urlFor, client } from "../../lib/client";
const HeroBanner = ({ hero }) => {
  const [categories, setCategories] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initialize with the first image
  const totalImages = 2; // Total number of hero banner images

    useEffect(() => {
    client
      .fetch(
        `*[_type == "category"]{
        title
      }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
    }, []);
  console.log('All categories: ',categories)
  return (
    <>
      <div className="home-header">
        <div className="container">
          <div className="home-header-container">
           {/*  <Link href={`/category/${categories[0]?.title}`}>
              <div className="featured header-one">
                <div className="header-img-container">
                  <h2 className="featured-title">{hero?.bigSqr?.title}</h2>
                </div>
                <img
                  className="header-img"
                  src={currentImageIndex === 0 ? urlFor(hero.bigSqr?.image) : urlFor(hero.tallRect.image)}
                  alt="featured our best seller"
                />
              </div>
            </Link> */}
             <Link href="/category/premium">
            {/* <Link href={`/category/${categories[0]?.title}`}> */}
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
             <Link href="/category//kitchen%20knives">
           {/*    <Link href={`/category/${categories[1]?.title}`}> */}
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
              <Link href="/category//kitchen%20knives">
             {/*  <Link href={`/category/${categories[2]?.title}`}> */}
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
            <Link href="/category/dual%20core">
         {/*      <Link href={`/category/${categories[3]?.title}`}> */}
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
