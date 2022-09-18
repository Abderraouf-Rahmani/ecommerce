import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CartSlide from "../cart/CartSlide";

const Navbar = () => {
  const menuContainer = useRef();
  // const cartContainer = useRef();
  const [isCartVisible, setIsCartVisible] = useState(true);

  useEffect(() => {
    console.log(isCartVisible);
  }, [isCartVisible]);

  const handleResponsiveMenu = (ResMenuState) => {
    if (ResMenuState) {
      menuContainer.current.style.display = "flex";
    } else {
      menuContainer.current.style.display = "none";
    }
  };

  return (
    <>
      <CartSlide cartState={isCartVisible} />

      <nav id="navbar" className="navbar">
        <div className="container">
          <div className="navbar-container">
            <div className="navbar-logo">単純</div>
            <div className="nav-items">
              <div className="nav-links nav-items">
                <Link href="product/navbar">
                  <span className="nav-item">CATEGORIES</span>
                </Link>
                <Link href="#navbar">
                  <span className="nav-item">ABOUT</span>
                </Link>
                <Link href="#navbar">
                  <span className="nav-item">STORE LOCATOR</span>
                </Link>
              </div>

              <span
                onClick={() => {
                  setIsCartVisible(!isCartVisible);
                }}
                className="cart-container"
              >
                <span className="cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                </span>
                <span className="cart-products">2</span>
              </span>
              <div
                className="burger-menu"
                onClick={() => {
                  handleResponsiveMenu(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
                </svg>
              </div>
              <div ref={menuContainer} className="menu-container">
                <div
                  className="close-menu"
                  onClick={() => {
                    handleResponsiveMenu(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                  </svg>
                </div>
                <div className="menu">
                  <Link href="#navbar">
                    <span className="nav-item">CATEGORIES</span>
                  </Link>
                  <Link href="#navbar">
                    <span className="nav-item">ABOUT</span>
                  </Link>
                  <Link href="#navbar">
                    <span className="nav-item">STORE LOCATOR</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
