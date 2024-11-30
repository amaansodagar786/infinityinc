import React from 'react';
import "./Webdevelop.scss";
import webimage from "../../../Images/Services/webservice.jpg";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa";

const Webdevelop = () => {
  const technologies = [
    {
      icon: <FaHtml5 color="#E34F26" size={50} />,
      name: "HTML",
      description: "The standard markup language for creating web pages.",
    },
    {
      icon: <FaCss3Alt color="#1572B6" size={50} />,
      name: "CSS",
      description: "Used to style and layout web pages, including colors and fonts.",
    },
    {
      icon: <FaJs color="#F7DF1E" size={50} />,
      name: "JavaScript",
      description: "A programming language for adding interactive behavior to web pages.",
    },
    {
      icon: <FaBootstrap color="#7952B3" size={50} />,
      name: "Bootstrap",
      description: "A framework for creating responsive and mobile-first websites.",
    },
    {
      icon: <FaReact color="#61DAFB" size={50} />,
      name: "React",
      description: "A JavaScript library for building user interfaces.",
    },
  ];

  return (
    <div className="webdevservice">
      {/* Web Development Section */}
      <section className="web-design-development">
        <div className="content">
          <div className="image">
            <img src={webimage} alt="Web Development Illustration" />
          </div>
          <div className="text">
            <h5>WEB DEVELOPMENT COMPANY</h5>
            <h1>Web Development</h1>
            <p>
              INFINITY Inc. is one of the top web development service providers
              out there. Our highly skilled and experienced Web Development team
              helps businesses, industries, and end-users conceive, design,
              create, and deploy best-in-class websites, web applications, and
              progressive web apps.
            </p>
          </div>
        </div>
      </section>

      {/* Frontend Technologies Section */}
      <section className="frontend-technologies">
        <h2>Frontend Technologies</h2>
        <p>Explore the core technologies we use to create exceptional user experiences.</p>
        <div className="technology-cards">
          {technologies.map((tech, index) => (
            <div className="card" key={index}>
              <div className="icon">{tech.icon}</div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Webdevelop;
