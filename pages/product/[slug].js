import React from "react";
import Product from "../../components/product/Product";
import Trending from "../../components/trending/Trending";

const ProductPage = () => {
  return (
    <>
      <Product />
      <Trending title="Peaple Also Viewed" />
    </>
  );
};

export default ProductPage;
