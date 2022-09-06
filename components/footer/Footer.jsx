import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="newsletter">
            <div className="container">
            <h2>Newsletter</h2>
                <form className="newsletter-form-container">
                    <input type="email" name="email" id="nl-email" placeholder='john@doe.com' />                    
                    <button type='submit' className='nl-submit'>Subscribe</button>
                </form>
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
                <div className="cr">Built with love</div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Footer