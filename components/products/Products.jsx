import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Products = ({ title }) => {
  return (
    <>
      <section id="products" className="products">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
          </div>

          <div className="products-section-container">
            <Link href="#products">
              <div className="category-card">
                <img
                  className="product-img product-img-top"
                  src="https://www.ikea.com/pt/en/images/products/tradfri-shortcut-button-white-smart__0988402_pe818100_s5.jpg?f=xxs"
                  alt="category"
                />
                <img
                  className="product-img product-img-bottom"
                  src="https://www.ikea.com/pt/en/images/products/tradfri-shortcut-button-white-smart__0807046_pe770217_s5.jpg?f=xxs"
                  alt="category"
                />
                <h3 className="cart-title">TRÅDFRI</h3>
              </div>
            </Link>
            <Link href="#products">
              <div className="category-card">
                <img
                  className="product-img product-img-top"
                  src="https://www.ikea.com/pt/en/images/products/tradfri-shortcut-button-white-smart__0988402_pe818100_s5.jpg?f=xxs"
                  alt="category"
                />
                <img
                  className="product-img product-img-bottom"
                  src="https://www.ikea.com/pt/en/images/products/tradfri-shortcut-button-white-smart__0807046_pe770217_s5.jpg?f=xxs"
                  alt="category"
                />
                <h3 className="cart-title">TRÅDFRI</h3>
              </div>
            </Link>
            <Link href="#products">
              <div className="category-card">
                <img
                  className="product-img product-img-top"
                  src="https://www.ikea.com/pt/en/images/products/tradfri-shortcut-button-white-smart__0988402_pe818100_s5.jpg?f=xxs"
                  alt="category"
                />
                <img
                  className="product-img product-img-bottom"
                  src="https://www.ikea.com/pt/en/images/products/tradfri-shortcut-button-white-smart__0807046_pe770217_s5.jpg?f=xxs"
                  alt="category"
                />
                <h3 className="cart-title">TRÅDFRI</h3>
              </div>
            </Link>
            <Link href="#products">
              <div className="category-card">
                <img
                  className="product-img product-img-top"
                  src="https://www.ikea.com/pt/en/images/products/tradfri-shortcut-button-white-smart__0988402_pe818100_s5.jpg?f=xxs"
                  alt="category"
                />
                <img
                  className="product-img product-img-bottom"
                  src="https://www.ikea.com/pt/en/images/products/tradfri-shortcut-button-white-smart__0807046_pe770217_s5.jpg?f=xxs"
                  alt="category"
                />
                <h3 className="cart-title">TRÅDFRI</h3>
              </div>
            </Link>
            <Link href="#products">
              <div className="category-card see-more">
                <span>Brows all products</span>
                <svg
                  className="see-more-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
