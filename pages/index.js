import React from "react";
import HeroBanner from "../components/heroBanner/HeroBanner";
import Products from "../components/products/Products";
import FeaturedBanner from "../components/featuredBanner/FeaturedBanner";
import Trending from "../components/trending/Trending";
import LowerFeaturedBanner from "../components/lowerFeaturedBanner/LowerFeaturedBanner";
import superjson from "superjson";
import client from "../lib/client";

const Home = ({ results, heroGrid, trending, topBanner, bottomBanner }) => {
  return (
    <>
      <HeroBanner hero={heroGrid.result[0]} />
      <Products products={results.result} />
      <FeaturedBanner featuredBanner={topBanner?.result[0]} />
      {/* <Trending trending={trending.result} /> */}
      <LowerFeaturedBanner bannerBottom={bottomBanner.result[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const url = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;
  const results = await fetch(url).then((res) => res.json());

  const HeroQuery = '*[_type == "hero"]';
  const HeroUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${HeroQuery}`;
  const heroGrid = await fetch(HeroUrl).then((res) => res.json());

  const topBannerQuery = '*[_type == "topBanner"]';
  const topBannerUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${topBannerQuery}`;
  const topBanner = await fetch(topBannerUrl).then((res) => res.json());

  const bottomBannerQuery = '*[_type == "BottomBanner"]';
  const bottomBannerUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${bottomBannerQuery}`;
  const bottomBanner = await fetch(bottomBannerUrl).then((res) => res.json());

  const trendingQuery = '*[_type == "trending"]';
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
