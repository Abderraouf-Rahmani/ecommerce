import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";
import ActionButton from "../buttons/ActionButton";

const CategoryProduct = ({ property, productDetails }) => {
  return (
    <Link href={`/product/${productDetails?.slug?.current}`}>
      <div className={`category-product ${property}`}>
        <div className="category-product-header">
          <div
            className={`category-product-img-wrapper ${
              property === "wide" ? "wide-img" : "normal-img"
            }`}
          >
            <img
              src={urlFor(productDetails?.image[0])}
              alt="a product"
              className="category-product-img"
            />
          </div>
          {property === "wide" && (
            <>
              <div className="wide-right-container">
                <div className="wide-title">{productDetails.wideCardTitle}</div>
                <ActionButton
                  text="VIEW MORE"
                  link={`/product/${productDetails.slug.current}`}
                />
              </div>
            </>
          )}
        </div>
        {property !== "wide" && (
          <>
            <div className="category-product-details">
              <div className="category-product-title">
                <span>{productDetails.name}</span>
              </div>
              <div className="category-product-price">
                {productDetails.price}$
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default CategoryProduct;
