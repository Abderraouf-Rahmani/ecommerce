import React, { useEffect, useState } from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryProduct from "./CategoryProduct";

const CategoryProducts = ({ products }) => {
  const [productsArr, setProductsArr] = useState(["loading"]);
  const [isLoading, setIsLoading] = useState(true);
  const [urlPath, setUrlPath] = useState();

  useEffect(() => {
    setIsLoading(true);
    setUrlPath(window.location.pathname);
    console.log(window.location.pathname);
    setProductsArr(products);
    setIsLoading(false);
  }, [urlPath, isLoading, products]);

  return (
    <>
      {productsArr[0] === "loading" ? (
        <>
          <div className="loading">
            <h1>loading...</h1>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="category-products">
              {productsArr.map((product) => (
                <CategoryProduct
                  key={product._rev}
                  property={product.isWide ? "wide" : "normal"}
                  productDetails={product}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CategoryProducts;
