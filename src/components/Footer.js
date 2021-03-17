import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Wanna stay up to date with my work? Follow me!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" 
                                name="email" type="email" 
                                placeholder="Your Email"/>
                        <button type="submit">Follow</button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>
                            About me
                        </h2>
                        <h2>
                            Social Media
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
