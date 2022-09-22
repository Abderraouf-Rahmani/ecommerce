import React from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryProduct from "./CategoryProduct";

const CategoryProducts = ({ products }) => {
  return (
    <>
      <div className="container">
        <div className="category-products">
          {/* <CategoryProduct property="normal" /> */}
          {products.map((product) => (
            <CategoryProduct
              key={product.name}
              property="normal"
              productDetails={product}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
