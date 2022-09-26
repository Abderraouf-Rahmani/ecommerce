import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { urlFor } from "../../lib/client";
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
        {/* <svg
          
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="42"
          height="42"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9V8l-4 4 4 4v-3h4v-2h-4z" />
        </svg> */}
        <span>&#8592;</span>
      </div>
      <div
        onClick={() => {
          carosel("rightArrow");
        }}
        className={styles.navRight}
      >
        {/* <svg
          
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="42"
          height="42"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z" />
        </svg> */}
        <span>&#8594;</span>
      </div>
      <div className={styles.carouselVp} ref={carouselViewPort}>
        <div
          ref={cardsWrapper}
          className={styles.cardsWrap}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {carouselProducts.map((product) => (
            <Link key={product._id} href={product.slug.current}>
              <div ref={card} className={styles.carouselCard}>
                <Image
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
