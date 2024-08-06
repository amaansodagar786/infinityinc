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
    </div>
  );
};

export default Banner;
