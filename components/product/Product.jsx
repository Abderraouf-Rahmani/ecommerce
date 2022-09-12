import React from "react";

const Product = () => {
  return (
    <>
      <section className="product-details">
        <div className="container">
          <div className="product-details-container">
            <div className="product-left">
              <div className="product-visualls">
                <div className="main-img-container">
                  <img
                    src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260/4547315968619_1260.jpg"
                    alt="Pop-up Toaster, white, 45cm"
                    className="main-img"
                  />
                </div>
                <div className="all-imgs-container">
                  <div className="img-container">
                    <img
                      src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260/4547315968619_1260.jpg"
                      alt="top view"
                      className="an-img"
                    />
                  </div>
                  <div className="img-container">
                    <img
                      src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260_00/4547315968619_02_1260.jpg"
                      alt="top view"
                      className="an-img"
                    />
                  </div>
                  <div className="img-container">
                    <img
                      src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260_00/4547315968619_03_1260.jpg"
                      alt="top view"
                      className="an-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-right">
              <div className="devider"></div>
              <div className="item-ids">
                <div className="item-title">Pop-Up Toaster</div>
                <div className="item-code">Item Code: 2584626</div>
              </div>
              <div className="product-right-details">
                <div className="item-desc">
                  Featuring some random words just to make this description a
                  bit content ;) Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Amet iure aliquid, unde nostrum obcaecati
                  quas voluptates!
                </div>
                <div className="item-price">$59.95</div>
                <div className="quantity">
                  <div className="minus qnt-changer">
                    <span>&#8722;</span>
                  </div>
                  <div className="add-to-cart-btn">ADD TO CART (2)</div>
                  <div className="plus qnt-changer">
                    <span>&#43;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
