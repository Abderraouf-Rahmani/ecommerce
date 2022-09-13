import React, { useEffect, useRef, useState } from "react";

const Product = () => {
  const specsGridColumnsNum = useRef();
  let numOfSpecs = [
    {
      title: "Size",
      content: "24cm * 20cm * 13cm",
    },
    {
      title: "Weight",
      content: "0.22kg",
    },
    {
      title: "Max Capacity",
      content: "500ml (enough for two cups of hot water)",
    },
    {
      title: "Approximate Boilling Time",
      content: "~ 2min",
    },
    {
      title: "Cord",
      content: "150 (cm)",
    },
  ];

  const [qnt, setQnt] = useState(1);

  useEffect(() => {
    specsGridColumnsNum.current.style.gridTemplateColumns = `repeat(${numOfSpecs.length}, 1fr)`;
    const miniViewImgs = window.document.querySelectorAll(".img-container");
    const bigImg = window.document.querySelector(".main-img");
    // console.group(miniViewImgs);
    miniViewImgs.forEach((miniImg) => {
      miniImg.addEventListener("click", () => {
        miniImg.firstChild.getAttribute("src");
        bigImg.setAttribute("src", `${miniImg.firstChild.getAttribute("src")}`);
      });
    });
  }, []);

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
                    src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260/4547315968619_1260.jpg"
                    alt="Pop-up Toaster, white, 45cm"
                    className="main-img"
                  />
                </div>
                <div className="all-imgs-container">
                  <button className="img-container">
                    <img
                      src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260/4547315968619_1260.jpg"
                      alt="top view"
                      className="an-img"
                    />
                  </button>
                  <button className="img-container">
                    <img
                      src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260_00/4547315968619_02_1260.jpg"
                      alt="top view"
                      className="an-img"
                    />
                  </button>
                  <button className="img-container">
                    <img
                      src="https://u6z5w6k6.stackpathcdn.com/IMG/prd/1260_00/4547315968619_03_1260.jpg"
                      alt="top view"
                      className="an-img"
                    />
                  </button>
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
            {numOfSpecs.map((spec) => (
              <div key={spec.title} className="spec">
                <div className="spec-title">{spec.title}:</div>
                <div className="spec-desc">{spec.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
