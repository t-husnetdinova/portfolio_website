import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

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
                            placeholder="Your Email" />
                        <button type="submit">Follow</button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>
                            Something
                        </h2>
                        <Link to='/'>Link 1</Link>
                        <Link to='/'>Link 2</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>
                            More
                        </h2>
                        <Link to='/'>Link 1</Link>
                        <Link to='/'>Link 2</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>
                            Moore
                        </h2>
                        <Link to='/'>Link 1</Link>
                        <Link to='/'>Link 2</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>
                            Moooore
                        </h2>
                        <Link to='/'>Link 1</Link>
                        <Link to='/'>Link 2</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Tammy Husnetdinova 
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>Tammy Husnetdinova © 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link pinterest'
                            href='https://www.pinterest.com/tamhus31/_saved/'
                            target='_blank'
                            aria-label='Pinterest'
                        >
                            <a href='https://www.pinterest.com/tamhus31/_saved/' class='fab fa-pinterest' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='https://www.youtube.com/channel/UCwiQYSftmZ2joZsotbUarTg'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <a href='https://www.youtube.com/channel/UCwiQYSftmZ2joZsotbUarTg' class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link linkedin'
                            href='https://www.linkedin.com/in/tammy-husnetdinova-25150b171'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <a href='https://www.linkedin.com/in/tammy-husnetdinova-25150b171' class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
