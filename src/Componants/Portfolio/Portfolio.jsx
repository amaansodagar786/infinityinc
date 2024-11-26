import React from 'react';
import './Portfolio.scss';
import img from "../../Images/Services/webservice.jpg";

const Portfolio = () => {
  return (
    <div className="hero-section">
      <div className="content">
        <h1>IT Solutions & Business Services Company</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua, magna aliqua.
          Ipsum is simply dummy text of the printing.
        </p>
        <div className="buttons">
          <button className="service-btn">Our Service</button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
      <div className="illustration">
        <img src={img} alt="Web Service Illustration" />
      </div>

      <div className="custom-shape-divider-bottom-1724778533">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
