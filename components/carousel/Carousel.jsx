import React, { useRef, useState } from 'react'
import styles from './Carousel.module.css'
import Toaster from './toaster.png'
const Carousel = () => {
    const card = useRef()
    const cardsWrapper = useRef()
    const [translated, setTranslated] = useState(0)


    const carosel = (direction) =>{
        let cardWidth = getComputedStyle(card.current).width
        let cardsWrapperWidth = parseInt(getComputedStyle(cardsWrapper.current).width.replace('px', ''))

       
        
        if(direction === 1) {
            if(translated >= 0 ) return;
            cardsWrapper.current.style.transform = `translateX(calc(${translated}px + ${cardWidth} + 19px))`
            setTranslated(translated + 250)
        }else if(direction === -1){
            if(translated <= -cardsWrapperWidth + 1200 ) return;
            cardsWrapper.current.style.transform = `translateX(calc(${translated}px - ${cardWidth} - 19px))`
            setTranslated(translated - 250)
        }

    }
  return (
    <div className={styles.carousel}>
        <div className={styles.navLeft}><svg onClick={()=>{carosel(1)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9V8l-4 4 4 4v-3h4v-2h-4z"/></svg></div>
        <div className={styles.navRight}><svg onClick={()=>{carosel(-1)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z"/></svg></div>
        <div className={styles.carouselVp}>
            <div ref={cardsWrapper} className={styles.cardsWrap}>
                <div ref={card} className={styles.carouselCard}>
                    <img src='https://hamiltonbeach.com/media/products/22820-02.jpg' alt='carousel card img' className={styles.cardImg} />
                    <div className={styles.cardTitle}>Pop-Up Toaster</div>
                    <div className={styles.cardPrice}>$79.33</div>
                </div>

                <div  ref={card}  className={styles.carouselCard}>
                    <img src='https://hamiltonbeach.com/media/products/22820-02.jpg' alt='carousel card img' className={styles.cardImg} />
                    <div className={styles.cardTitle}>Pop-Up Toaster</div>
                    <div className={styles.cardPrice}>$79.33</div>
                </div>

                <div className={styles.carouselCard}>
                    <img src='https://hamiltonbeach.com/media/products/22820-02.jpg' alt='carousel card img' className={styles.cardImg} />
                    <div className={styles.cardTitle}>Pop-Up Toaster</div>
                    <div className={styles.cardPrice}>$79.33</div>
                </div>

                <div className={styles.carouselCard}>
                    <img src='https://hamiltonbeach.com/media/products/22820-02.jpg' alt='carousel card img' className={styles.cardImg} />
                    <div className={styles.cardTitle}>Pop-Up Toaster</div>
                    <div className={styles.cardPrice}>$79.33</div>
                </div>

                <div className={styles.carouselCard}>
                    <img src='https://hamiltonbeach.com/media/products/22820-02.jpg' alt='carousel card img' className={styles.cardImg} />
                    <div className={styles.cardTitle}>Pop-Up Toaster</div>
                    <div className={styles.cardPrice}>$79.33</div>
                </div>

                <div className={styles.carouselCard}>
                    <img src='https://hamiltonbeach.com/media/products/22820-02.jpg' alt='carousel card img' className={styles.cardImg} />
                    <div className={styles.cardTitle}>Pop-Up Toaster</div>
                    <div className={styles.cardPrice}>$79.33</div>
                </div>

                <div className={styles.carouselCard}>
                    <img src='https://hamiltonbeach.com/media/products/22820-02.jpg' alt='carousel card img' className={styles.cardImg} />
                    <div className={styles.cardTitle}>Pop-Up Toaster</div>
                    <div className={styles.cardPrice}>$79.33</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel