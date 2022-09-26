import React from "react";
import HeroBanner from "../components/heroBanner/HeroBanner";
import Products from "../components/products/Products";
import FeaturedBanner from "../components/featuredBanner/FeaturedBanner";
import Trending from "../components/trending/Trending";
import LowerFeaturedBanner from "../components/lowerFeaturedBanner/LowerFeaturedBanner";
import { client } from "../lib/client";
import CategoryProducts from "../components/category/CategoryProducts";

const Home = ({ results, heroGrid, trending, topBanner, bottomBanner }) => {
  return (
    <>
      <HeroBanner hero={heroGrid[0]} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <h2 className="section-title">Prodcuts we are proud of</h2>
      </div>
      <CategoryProducts products={results} />
      <FeaturedBanner featuredBanner={topBanner[0]} />
      <Trending title="Trending Now" trendProducts={results} />
      <LowerFeaturedBanner bannerBottom={bottomBanner[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"][0..6]';
  // const url = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;
  const results = await client.fetch(query);

  const HeroQuery = '*[_type == "hero"]';
  // const HeroUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${HeroQuery}`;
  const heroGrid = await client.fetch(HeroQuery);

  const topBannerQuery = '*[_type == "topBanner"]';
  // const topBannerUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${topBannerQuery}`;
  const topBanner = await client.fetch(topBannerQuery);

  const bottomBannerQuery = '*[_type == "BottomBanner"]';
  // const bottomBannerUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${bottomBannerQuery}`;
  const bottomBanner = await client.fetch(bottomBannerQuery);

  const trendingQuery = '*[_type == "product"]';
  const trendingUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${trendingQuery}`;
  const trending = await fetch(trendingUrl).then((res) => res.json());

  return {
    props: {
      results,
      heroGrid,
      trending,
      topBanner,
      bottomBanner,
    },
  };
};

export default Home;
