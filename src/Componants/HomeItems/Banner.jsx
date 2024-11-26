import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Images/bganimation.json';
import './Banner.scss';

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Your Compelling Headline Here</h1>
        <p>Some engaging subtext or a brief description about your services.</p>
        <a href="#services" className="cta-button">Learn More</a>
      </div>
      <div className="banner-animation">
        <Lottie options={defaultOptions} />
      </div>
      <div className="custom-shape-divider-bottom-1724778533">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
