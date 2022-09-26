import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <Link href={"product/" + product.slug.current}>
      <div className="category-card">
        <Image
          className="product-img product-img-top"
          src={urlFor(product.image[0])}
          alt="category"
        />
        <Image
          className="product-img product-img-bottom"
          src={urlFor(product.image[1])}
          alt="category"
        />
        <h3 className="cart-title">{product.name}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
