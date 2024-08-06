// Introduction.jsx
import React from 'react';
import './Introduction.scss';

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="container">
        <h2>
          <span className="about">About</span> <span className="us">Us</span>
        </h2>
        <p>
          Welcome to <strong>Infinity Inc.</strong>, your innovative partner in software development. We specialize in creating cutting-edge solutions that drive businesses forward in the digital age.
        </p>
        <p>
          Our team of passionate developers, designers, and strategists work tirelessly to bring your ideas to life. From mobile applications to web platforms, we deliver custom solutions tailored to meet your unique needs.
        </p>
        
      </div>
    </div>
  );
};

export default Introduction;
