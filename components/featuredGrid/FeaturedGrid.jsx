import React from 'react'
import Link from 'next/link'
import styles from './featuredGrid.module.css'
const FeaturedGrid = () => {
  return (
    <>
    <div className={styles.featured}>
        <div className="container">
            <div className={styles.grid}>
                    <Link className={styles.one} href='PRODUCT/ID'>
                        <div>
                            <img src="https://static.wixstatic.com/media/e01a67_f5fb32b5cb40447bb1c80dd90d8081d1~mv2_d_4096_5002_s_4_2.png/v1/fill/w_536,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e01a67_f5fb32b5cb40447bb1c80dd90d8081d1~mv2_d_4096_5002_s_4_2.png" alt="product" />
                            <h3 className={styles.title}>Whatkn kind of watch is this</h3>
                            <span className={styles.price}>138,54$</span>
                            <div className={styles.shopLink}>Shop Now or you will slipp of a banana
                            are you sure you wanna gokiu ? whaliuahs
                            <div>çlkm</div></div>
                        </div>
                    </Link>
                <div className={styles.half}></div>
                <div className={styles.fourth}></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FeaturedGrid