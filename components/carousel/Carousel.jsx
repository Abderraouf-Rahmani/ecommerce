import Link from "next/link";
import React, { useRef, useState } from "react";
import { urlFor } from "../../lib/client";
import Image from "next/image";
import styles from "./Carousel.module.css";
const Carousel = ({ carouselProducts }) => {
  const card = useRef();
  const cardsWrapper = useRef();
  const carouselViewPort = useRef();
  const [translateX, setTranslateX] = useState(0);

  const carosel = (direction) => {
    let cardWidth = parseInt(
      getComputedStyle(card.current).width.replace("px", "")
    );
    let cardsWrapperWidth = parseInt(
      getComputedStyle(cardsWrapper.current).width.replace("px", "")
    );
    let carouseViewPortWidth = parseInt(
      getComputedStyle(carouselViewPort.current).width.replace("px", "")
    );

    if (
      direction === "rightArrow" &&
      -translateX < cardsWrapperWidth - carouseViewPortWidth
    ) {
      setTranslateX(translateX - cardWidth - 19);
    } else if (direction === "leftArrow" && translateX < 0) {
      setTranslateX(translateX + cardWidth + 19);
    }

    // if (direction === 1) {
    //   if (translated >= 0) return setTranslated(0);
    //   cardsWrapper.current.style.transform = `translateX(calc(${translated}px + ${cardWidth}px + 19px))`;
    //   setTranslated(translated + cardWidth + 19 / 2);
    // } else if (direction === -1) {
    //   if (translated <= -cardsWrapperWidth + 1200)
    //     return setTranslated(-cardsWrapperWidth + 1200);
    //   cardsWrapper.current.style.transform = `translateX(calc(${translated}px - ${cardWidth}px - 19px))`;
    //   setTranslated(translated - cardWidth - 19 / 2);
    // }
  };
  return (
    <div className={styles.carousel}>
      <div
        onClick={() => {
          carosel("leftArrow");
        }}
        className={styles.navLeft}
      >
        <span>&#8592;</span>
      </div>
      <div
        onClick={() => {
          carosel("rightArrow");
        }}
        className={styles.navRight}
      >
        <span>&#8594;</span>
      </div>
      <div className={styles.carouselVp} ref={carouselViewPort}>
        <div
          ref={cardsWrapper}
          className={styles.cardsWrap}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {carouselProducts?.map((product) => (
            <Link key={product._id} href={"/product/" + product.slug.current}>
              <div ref={card} className={styles.carouselCard}>
                <img
                  src={urlFor(product.image[0])}
                  alt={product.name}
                  className={styles.cardImg}
                />
                <div className={styles.cardTitle}>{product.name}</div>
                <div className={styles.cardPrice}>{product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
