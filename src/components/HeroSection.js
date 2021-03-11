import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-5.mp4" autoPlay loop muted />
            <h1>Welcome to my site!</h1>
            <p>Make yourself at home :)</p>
        </div>
    )
}

export default HeroSection
