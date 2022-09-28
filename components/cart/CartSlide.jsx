import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
const CartSlide = () => {
  const {
    showCart,
    toggleCart,
    cartItems,
    setCartItems,
    totalPrice,
    updateCartItemQty,
    handleCartItemRemove,
  } = useStateContext();
  const cartOpacBg = useRef();
  const cartItemQnt = useRef();

  const reRenderCartItemsQnt = (index, qtyFactor, cartItem) => {
    updateCartItemQty(index, qtyFactor, cartItem);
    cartItemQnt.innerHTML = cartItem[index]?.quantity;
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.path[0] === cartOpacBg.current) {
        toggleCart();
      }
    });
  }, []);

  return (
    <>
      <div
        className="opac-bg"
        ref={cartOpacBg}
        // onClick={() => {
        //   toggleCart();
        // }}
      >
        <div className="slide-cart-container">
          <div className="cart-header">
            <div className="slide-cart-title">
              <h2>Your Shopping Cart</h2>
            </div>
            <div
              className="cart-close"
              onClick={() => {
                toggleCart();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                  fill="rgba(0,0,0,1)"
                />
              </svg>
            </div>
          </div>
          <div className="cart-body">
            {cartItems.map((cartItem, i) => (
              <div key={i} className="cart-item">
                {/* {console.log(cartItem)} */}
                <div className="cart-item-left">
                  <img
                    src={urlFor(cartItem?.image[0])}
                    alt="product img"
                    className="cart-item-img"
                    layout="fill"
                  />
                </div>
                <div className="cart-item-mid">
                  <h4 className="cart-item-title">{cartItem?.name}</h4>
                  <span className="cart-item-code">{cartItem?.ref}</span>
                  <div className="gnt-changer-container">
                    <div
                      className="cart-qnt-changer qnt-minus"
                      onClick={() => {
                        reRenderCartItemsQnt(i, "dec", cartItem);
                      }}
                    >
                      <span>&#8722;</span>
                    </div>
                    <div className="cart-qnt" ref={cartItemQnt}>
                      {cartItem.quantity}
                    </div>
                    <div
                      className="cart-qnt-changer qnt-plus"
                      onClick={() => {
                        reRenderCartItemsQnt(i, "inc", cartItem);
                      }}
                    >
                      <span>&#43;</span>
                    </div>
                  </div>
                </div>
                <div className="cart-item-right">
                  <div className="cart-item-price">{cartItem?.price}</div>
                  <div
                    className="cart-item-remove"
                    onClick={() => {
                      handleCartItemRemove(i, cartItem);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="rgba(225,225,225,1)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSlide;
