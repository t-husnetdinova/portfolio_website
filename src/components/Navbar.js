import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo link' onClick={closeMobileMenu} >
            Tammy Husnetdinova
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links link'
                onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/portfolio' 
              className='nav-links link' 
              onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links link'
                onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/game'
                className='nav-links link'
                onClick={closeMobileMenu}>
                Game?
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
