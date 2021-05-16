import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <ul class="socials" id="socials">
                <li class="socials-item">
                    <a href="https://github.com/t-husnetdinova" >
                        <i class="fab fa-2x fa-github"></i>
                    </a>
                </li>
                <li class="socials-item">
                    <a href="https://www.linkedin.com/in/tammy-husnetdinova-25150b171/">
                        <i class="fab fa-2x fa-linkedin"></i>
                    </a>
                </li>
                <li class="socials-item">
                    <a href="https://www.youtube.com/channel/UCwiQYSftmZ2joZsotbUarTg">
                        <i class="fab fa-2x fa-youtube"></i>
                    </a>
                </li>
                </ul>
            </div>
    )
}

export default HeroSection
