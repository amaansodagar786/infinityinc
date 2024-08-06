// AboutUs.jsx
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { GiAchievement, GiEyeTarget, GiDiamondHard } from 'react-icons/gi';
import visionImage from "../../Images/amaan.jpg";
import missionImage from "../../Images/amaan.jpg";
import amaan from "../../Images/amaan.jpg";

import './About.scss';

const About = () => {
  return (
    <div className="about-us">
      <div className="container">
        <section className="our-story">
          <h2>About Us</h2>
          <p>
            Founded in 2024, <strong>Infinity Inc.</strong> began with a mission to revolutionize the software development industry. Our founders envisioned a company where creativity meets cutting-edge technology.
          </p>
          <p>
            With a passion for innovation and a commitment to excellence, Infinity Inc. has grown into a dynamic team of experts dedicated to delivering exceptional software solutions.
          </p>
        </section>

        <section className="mission-vision">
          <h2>Mission , Vision , and Values</h2>


          <div className="mission-vision-content">

            <div className="mission-vision-item">
              <div className="text-content">
                <h3><GiEyeTarget className="icon" /> Our Vision</h3>
                <p>
                  To be a global leader in software development, recognized for our commitment to quality, innovation, and customer satisfaction.
                </p>
              </div>
              <img src={visionImage} alt="Our Vision" />
            </div>


            <div className="mission-vision-item">
              <img src={missionImage} alt="Our Mission" />
              <div className="text-content">
                <h3><GiAchievement className="icon" /> Our Mission</h3>
                <p>
                  To empower businesses with innovative software solutions that drive success and growth.
                </p>
              </div>
            </div>

            

            <div className="mission-vision-item">
              <div className="text-content">
                <h3><GiDiamondHard className="icon" /> Our Core Values</h3>
                <ul>
                  <li>Innovation: Pushing the boundaries of technology</li>
                  <li>Excellence: Striving for the highest standards</li>
                  <li>Integrity: Operating with honesty and transparency</li>
                  <li>Collaboration: Working together to achieve more</li>
                </ul>
              </div>
              <img src={missionImage} alt="Our Mission" />

            </div>
          </div>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={amaan} alt="Jay" />
              <h4>Jay</h4>
              <p>Co-Founder</p>
              <a href="https://www.linkedin.com/in/jane-doe" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <div className="team-member">
              <img src={amaan} alt="Amaan" />
              <h4>Amaan</h4>
              <p>Co-Founder</p>
              <a href="https://www.linkedin.com/in/john-smith" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <div className="team-member">
              <img src={amaan} alt="Hiten" />
              <h4>Hiten</h4>
              <p>Co-Founder</p>
              <a href="https://www.linkedin.com/in/john-smith" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
