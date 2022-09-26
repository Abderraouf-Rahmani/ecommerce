import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
const CartSlide = ({ cartState }) => {
  const [cartStatus, setCartStatus] = useState(cartState);
  const bgOpac = useRef();
  useEffect(() => {
    if (cartStatus) {
      bgOpac.current.style.display = "block";
    } else {
      bgOpac.current.style.display = "none";
    }
  }, [cartStatus]);
  return (
    <>
      <div
        className="opac-bg"
        ref={bgOpac}
        onClick={() => {
          setCartStatus(!cartStatus);
        }}
      >
        <div className="slide-cart-container">
          <div className="cart-header">
            <div className="slide-cart-title">
              <h2>Your Shopping Cart</h2>
            </div>
            <div className="cart-close">
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
            <div className="cart-item">
              <div className="cart-item-left">
                <Image
                  src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260_00/4547315968619_03_1260.jpg"
                  alt="product img"
                  className="cart-item-img"
                  layout="fill"
                />
              </div>
              <div className="cart-item-mid">
                <h4 className="cart-item-title">Pop-Up Toaster 9000</h4>
                <span className="cart-item-code">9D8F5F75</span>
                <div className="gnt-changer-container">
                  <div className="cart-qnt-changer qnt-minus">
                    <span>&#8722;</span>
                  </div>
                  <div className="cart-qnt">1</div>
                  <div className="cart-qnt-changer qnt-plus">
                    <span>&#43;</span>
                  </div>
                </div>
              </div>
              <div className="cart-item-right">
                <div className="cart-item-price">88.55$</div>
                <div className="cart-item-remove">
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
            <div className="cart-item">
              <div className="cart-item-left">
                <Image
                  src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260_00/4547315968619_03_1260.jpg"
                  alt="product img"
                  className="cart-item-img"
                />
              </div>
              <div className="cart-item-mid">
                <h4 className="cart-item-title">Pop-Up Toaster 9000</h4>
                <span className="cart-item-code">9D8F5F75</span>
                <div className="gnt-changer-container">
                  <div className="cart-qnt-changer qnt-minus">
                    <span>&#8722;</span>
                  </div>
                  <div className="qnt">1</div>
                  <div className="cart-qnt-changer qnt-plus">
                    <span>&#43;</span>
                  </div>
                </div>
              </div>
              <div className="cart-item-right">
                <div className="cart-item-price">88.55$</div>
                <div className="cart-item-remove">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSlide;
