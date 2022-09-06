import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="news-letter">
            <h2>Newsletter</h2>
            <div className="container">
                <div className="news-letter-form-container">
                    <input type="email" name="email" id="nl-email" />                    
                    <button type='submit' className='nl-submit'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className="footer-menu">
            <div className="container">
                <div className="footer-menu-items">
                    <div className="nav-items">
                            <Link href='#navbar'>
                                <span className="nav-item">About</span>
                            </Link>
                            
                            <Link href='#navbar'>
                                <span className="nav-item">Store locator</span>
                            </Link>

                            <Link href='#navbar'>
                                <span className="nav-item">FAQs</span>
                            </Link>

                            <Link href='#navbar'>
                                <span className="nav-item">News</span>
                            </Link>

                            <Link href='#navbar'>
                                <span className="nav-item">Careers</span>
                            </Link>

                            <Link href='#navbar'>
                                <span className="nav-item">Contact Us</span>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="cr">Built with love</div>
    </div>

  )
}

export default Footer