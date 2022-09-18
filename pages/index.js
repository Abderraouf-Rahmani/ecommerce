import React from "react";
import HeroBanner from "../components/heroBanner/HeroBanner";
import Products from "../components/products/Products";
import FeaturedBanner from "../components/featuredBanner/FeaturedBanner";
import Trending from "../components/trending/Trending";
import LowerFeaturedBanner from "../components/lowerFeaturedBanner/LowerFeaturedBanner";
import client from "../lib/client";

export default function Home({ resultsData }) {
  // console.log(products && products);
  return (
    <>
      {console.log(resultsData)}
      <HeroBanner />
      <Products />

      <FeaturedBanner />
      <Trending />
      <LowerFeaturedBanner />
    </>
  );
}

export const getServerSideProps = () => {
  // const query = `*[_type == "product"]`;
  // test URL
  const products = fetch("https://cat-fact.herokuapp.com/facts").then(
    (results) => {
      results.json();
    }
  );

  return {
    props: { products },
  };
};
