import React from "react";
import Carousel from "../carousel/Carousel";

const Trending = ({ title }) => {
  return (
    <>
      <section className="trending">
        <div className="container">
          <h2>{title}</h2>
          <br />
          <Carousel />
        </div>
      </section>
    </>
  );
};

export default Trending;
