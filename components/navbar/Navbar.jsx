import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <nav id='navbar' className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <div className="navbar-logo">LOGO.here</div>
                    <div className="nav-items">
                        <Link href='#navbar'>
                            <span className="nav-item">CATEGORIES</span>
                        </Link>
                        <Link href='#navbar'>
                            <span className="nav-item">ABOUT</span>
                        </Link>
                        <Link href='#navbar'>
                            <span className="nav-item">STORE LOCATOR</span>
                        </Link>
                        
                        <span className="cart-container">
                            <span className="cart">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                            </span>
                            <span className="cart-products">2</span>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar