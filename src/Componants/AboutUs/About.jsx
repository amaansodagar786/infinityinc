import React from 'react';
import './About.scss';
import buildingImage from '../../Images/Services/webservice.jpg';
import visionImage from '../../Images/Services/webservice.jpg';

const About = () => {
  return (
    <section className="about-us">
      <div className="container">
        {/* Top Heading */}
        <div className="about-heading">
          <h2>About Us</h2>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="text-content">
            <h5>WEB DEVELOPMENT COMPANY</h5>
            <h1>Who we Are</h1>
            <p>
              The foundation of iNFINITY Inc. has been laid on by a team of like-minded intellectuals sharing a passion for technology, innovation, and engineering. Since its inception, iNFINITY Inc. has been working consistently to bring a digital revolution across various industries and businesses around the globe.
            </p>
            <p>
              With a wealth of development experience, deep understanding of global markets, an eye for design, and unmatched technical expertise, we help transform your ideas and requirements into functional and customized digital solutions.
            </p>
            <button className="get-in-touch">Get in Touch</button>
          </div>
          <div className="image-content">
            <img src={buildingImage} alt="Company Building" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="vision-section">
          <div className="vision-image">
            <img src={visionImage} alt="Vision Illustration" />
          </div>
          <div className="vision-content">
            <h5>OUR VISION</h5>
            <h1>To bring in a Digital Revolution</h1>
            <p>
              We envision giving a 360-degree transformation to your Digital Personal Me. We continually work towards enabling businesses from various sectors to harness the power of technology and transform how they operate and how their brand can establish a unique identity digitally.
            </p>
            <p>
              Our team tirelessly works to help you achieve your strategic goals through technology & innovative solutions by thinking beyond the brief and pre-empting the future. Most importantly, WE DELIVER – each time.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="vision-section">
          
          <div className="vision-content">
            <h5>OUR VALUES</h5>
            <h1>Integrity, Transparency & Commitment</h1>
            <p>
              Our core values stand tall as pillars of our existence and growth. We strongly believe that for the successful execution of any project and continual growth, it is crucial to:
            </p>
            <ul>
              <li>Maintain 100% transparency in communication within your team and with your client.</li>
              <li>Ensure full clarity and understanding of the client’s expectations.</li>
              <li>Adopt an ethical approach in all endeavors.</li>
              <li>Deliver best-in-class innovative solutions within the committed timelines.</li>
            </ul>
          </div>
          <div className="vision-image">
            <img src={visionImage} alt="Our Values Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
