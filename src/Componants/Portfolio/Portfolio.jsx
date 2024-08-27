import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.scss';
import website from "../../Images/Services/webservice.jpg"; // Update with correct paths


const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="portfolio">
      <div className="container">
        <h2 data-aos="fade-up">Our Portfolio</h2>
        <section className="project" data-aos="fade-up">
          <div className="project-info" data-aos="fade-right">
            <h3>Website Development Project</h3>
            <p>
              This project involved the development of a responsive website for a client in the e-commerce sector. The website features an intuitive user interface, secure payment gateway integration, and is optimized for performance.
            </p>
            <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, React, Node.js</p>
            <a href="https://example.com/live-link" target="_blank" rel="noopener noreferrer" className="live-link">View Live Project</a>
          </div>
          <div className="project-images" data-aos="fade-left">
            <img src={website} alt="Website Project Screenshot 1" />
            <img src={website} alt="Website Project Screenshot 2" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
