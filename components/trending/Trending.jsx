import React from "react";
import Carousel from "../carousel/Carousel";

const Trending = ({ title, trendProducts }) => {
  return (
    <>
      <section className="trending">
        <div className="container">
          <h2>{title}</h2>
          <br />
          <Carousel carouselProducts={trendProducts} />
        </div>
      </section>
    </>
  );
};

export default Trending;
