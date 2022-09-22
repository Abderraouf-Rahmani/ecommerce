import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../product_card/ProductCard";
const Products = ({ products }) => {
  return (
    <>
      <section id="products" className="products">
        <div className="container">
          <div className="section-title">
            <h2>Products</h2>
          </div>
          <div className="products-section-container">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
