import React from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaCogs } from 'react-icons/fa';
import './Services.scss';
import website from "../../Images/Services/webservice.jpg"; // Update with correct paths

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="title-section">
          <h2>Our Services</h2>
        </div>

        <section className="service-item">
          <div className="text-content">
            <h3><FaCode className="icon" /> Website Development</h3>
            <p>
              We provide top-notch website development services that cater to your business needs. Our team is experienced in using the latest technologies to deliver responsive, secure, and scalable websites.
            </p>
          </div>
          <div className="image-content">
            <img src={website} alt="Website Development" />
          </div>
        </section>

        <section className="service-item">
          <div className="image-content">
            <img src={website} alt="App Development" />
          </div>
          <div className="text-content">
            <h3><FaMobileAlt className="icon" /> App Development</h3>
            <p>
              Our app development services include creating high-performance mobile applications for Android and iOS platforms, ensuring an exceptional user experience.
            </p>
          </div>
        </section>

        <section className="service-item">
          <div className="text-content">
            <h3><FaPalette className="icon" /> Website Design</h3>
            <p>
              Our creative designers craft visually appealing and user-friendly website designs that align with your brand identity and business goals.
            </p>
          </div>
          <div className="image-content">
            <img src={website} alt="Website Design" />
          </div>
        </section>

        <section className="service-item">
          <div className="image-content">
            <img src={website} alt="Customized Software Development" />
          </div>
          <div className="text-content">
            <h3><FaCogs className="icon" /> Customized Software Development</h3>
            <p>
              We offer customized software solutions tailored to your specific business requirements, helping you achieve operational efficiency and competitive advantage.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
