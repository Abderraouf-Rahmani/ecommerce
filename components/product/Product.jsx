import React, { useEffect, useRef, useState } from "react";
import { urlFor } from "../../lib/client";

const Product = ({ product }) => {
  const { name, ref, desc, image, price, characteristics } = product;
  const specsGridColumnsNum = useRef();

  const [qnt, setQnt] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    specsGridColumnsNum.current.style.gridTemplateColumns = `repeat(${characteristics.length}, 1fr)`;
    // const miniViewImgs = window.document.querySelectorAll(".img-container");
  }, [characteristics]);

  const UpdateCart = (change) => {
    if (change === "+") {
      setQnt(qnt + 1);
    } else if (change === "-") {
      if (qnt <= 1) return;
      setQnt(qnt - 1);
    }
  };
  return (
    <>
      <section className="product-details">
        <div className="container">
          <div className="product-details-container">
            <div className="product-left">
              <div className="product-visualls">
                <div className="main-img-container">
                  <img
                    src={urlFor(image[imgIndex])}
                    alt="Pop-up Toaster, white, 45cm"
                    className="main-img"
                  />
                </div>
                <div className="all-imgs-container">
                  {image.map((img, i) => (
                    <button
                      key={img._key}
                      className="img-container"
                      onClick={() => {
                        setImgIndex(i);
                      }}
                    >
                      <img
                        src={urlFor(img)}
                        alt="top view"
                        className="an-img"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="product-right">
              <div className="devider"></div>
              <div className="item-ids">
                <div className="item-title">{name}</div>
                <div className="item-code">Item Code: {ref}</div>
              </div>
              <div className="product-right-details">
                <div className="item-desc">{desc}</div>
                <div className="item-price">{price}$</div>
                <div className="quantity">
                  <div
                    onClick={() => {
                      UpdateCart("-");
                    }}
                    className="minus qnt-changer"
                  >
                    <span>&#8722;</span>
                  </div>
                  <div className="add-to-cart-btn">ADD TO CART ({qnt})</div>
                  <div
                    onClick={() => {
                      UpdateCart("+");
                    }}
                    className="plus qnt-changer"
                  >
                    <span>&#43;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={specsGridColumnsNum} className="product-specs">
            {characteristics.map((spec) => (
              <div key={spec._key} className="spec">
                <div className="spec-title">{spec.spec}:</div>
                <div className="spec-desc">{spec.char}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
