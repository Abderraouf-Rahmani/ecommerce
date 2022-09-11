import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <>
      <div className="home-header">
        <div className="container">
          <div className="home-header-container">
            <Link href="#navbar">
              <div className="featured header-one">
                <div className="header-img-container">
                  <h2 className="featured-title">Live comfortably</h2>
                </div>
                <img
                  className="header-img"
                  src="https://www.ikea.com/ext/ingkadam/m/5140a5378a2069ea/original/PH161018-crop001.jpg"
                  alt="featured our best seller"
                />
              </div>
            </Link>
            <Link href="#navbar">
              <div className="featured header-two">
                <div className="header-img-container">
                  <h2 className="featured-title">HW Skincare</h2>
                </div>
                <img
                  className="header-img headerimg-two"
                  src="https://i.pinimg.com/564x/7a/94/d4/7a94d4f79f79146703cab823170e1609.jpg"
                  alt="featured our best seller"
                />
              </div>
            </Link>
            <Link href="#navbar">
              <div className="featured header-four">
                <div className="header-img-container">
                  <h2 className="featured-title">
                    Kitchen & <br /> Dining
                  </h2>
                </div>
                <img
                  className="header-img"
                  src="https://www.ikea.com/images/traditional-kitchens-bb61df5ab1659ce24121879f7ec42300.jpg"
                  alt="featured our best seller"
                />
              </div>
            </Link>
            <Link href="#navbar">
              <div className="featured header-four-low">
                <div className="header-img-container">
                  <h2 className="featured-title">Home Electronics</h2>
                </div>
                <img
                  className="header-img"
                  src="https://www.ikea.com/pt/en/images/products/lillhult-usb-a-to-usb-c-dark-grey__1045694_pe842698_s5.jpg"
                  alt="featured our best seller"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
