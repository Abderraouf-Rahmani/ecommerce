import React, { useEffect, useState } from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryProduct from "./CategoryProduct";

const CategoryProducts = ({ loadingState, products }) => {
  const [isLoading, setIsLoading] = useState(loadingState);
  return (
    <>
      <div className="container">
        <div className="category-products">
          {isLoading ? (
            <>
              <h1>Loading</h1>
            </>
          ) : (
            <>
              {products?.map((product) => (
                <CategoryProduct
                  key={product._rev}
                  property={product.isWide ? "wide" : "normal"}
                  productDetails={product}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
