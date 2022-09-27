import React, { useEffect, useState } from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryProduct from "./CategoryProduct";

const CategoryProducts = ({ products }) => {
  return (
    <>
      <div className="container">
        <div className="category-products">
          {products?.map((product) => (
            <CategoryProduct
              key={product._rev}
              property={product.isWide ? "wide" : "normal"}
              productDetails={product}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
