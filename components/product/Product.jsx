import React, { useEffect, useRef, useState } from "react";
import { urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";
import getStripe from "../../lib/getStripe";
import notify from "../../util/util";

const Product = ({ product }) => {
  const { decQty, incQty, qty, onAdd, toggleCart } = useStateContext();
  const { name, ref, desc, image, price, characteristics } = product;
  const specsGridColumnsNum = useRef();

  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    specsGridColumnsNum.current.style.gridTemplateColumns = `repeat(${characteristics.length}, 1fr)`;
    // const miniViewImgs = window.document.querySelectorAll(".img-container");
  }, [characteristics]);

  const handleBuyNow = async (product) => {
    notify("Redirecting...", "promise");

    product.quantity = qty;
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([product]),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    console.log(data);
    stripe.redirectToCheckout({ sessionId: await data.id });
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
                <div className="item-mid">
                  <span className="item-mid-title">Quantity:</span>
                  <div className="quantity">
                    <button onClick={decQty} className="minus qnt-changer">
                      <span>&#8722;</span>
                    </button>
                    <div className="item-qty">{qty}</div>
                    <button onClick={incQty} className="plus qnt-changer">
                      <span>&#43;</span>
                    </button>
                  </div>
                  <div className="item-price">
                    {Number(price * qty).toFixed(2)}$
                  </div>
                </div>
                <div className="item-footer">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => onAdd(product, qty)}
                  >
                    ADD TO CART
                  </button>
                  <button
                    className="buy-now-btn"
                    onClick={() => {
                      handleBuyNow(product);
                    }}
                  >
                    BUY NOW
                  </button>
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
