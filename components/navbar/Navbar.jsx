import React from 'react'
import navStyles from './Navbar.module.css'
const Navbar = () => {
  return (
    <>
        <nav className={navStyles.nav}>
            <div className="container">
                <div className={navStyles.navbar}>
                    <div className={navStyles.logo}>Homan.</div>
                    <div className={navStyles.navItems}>
                        <a href="" className={navStyles.navItem}>Home</a>
                        <a href="" className={navStyles.navItem}>Products</a>
                        <a href="" className={navStyles.navItem}>Blog</a>
                        <span className={navStyles.cart}>
                        <svg className={navStyles.cartIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z"/></svg>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar