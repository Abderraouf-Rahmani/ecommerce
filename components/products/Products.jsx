import Link from 'next/link'
import React, { useRef, useState } from 'react'

const Products = () => {
    
  return (
    <>
        <section id='products' className="products">
            <div className="container">
                        <div className="section-title"><h2>Categories</h2></div>
                
                        <div className="products-section-container">
                        <Link href='#products'>
                                <div className="category-card">
                                    <img src="" alt="category" />
                                    <h3 className="cart-title">Kitchen</h3>
                                </div>
                            </Link>
                            <Link href='#products'>
                                <div className="category-card">
                                    <img src="" alt="category" />
                                    <h3 className="cart-title">Kitchen</h3>
                                </div>
                            </Link>
                            <Link href='#products'>
                                <div className="category-card">
                                    <img src="" alt="category" />
                                    <h3 className="cart-title">Kitchen</h3>
                                </div>
                            </Link>
                            <Link href='#products'>
                                <div className="category-card">
                                    <img src="" alt="category" />
                                    <h3 className="cart-title">Kitchen</h3>
                                </div>
                            </Link>
                            <Link href='#products'>
                                <div className="category-card">
                                    <img src="" alt="category" />
                                    <h3 className="cart-title">Kitchen</h3>
                                </div>
                            </Link>
                        </div>
                           
                   
            </div>
        </section>
    </>
  )
}

export default Products