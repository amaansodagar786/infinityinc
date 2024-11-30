import React from "react";
import { Link } from "react-router-dom";
import './Services.scss';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Short description for the ones who look for something new.",
      icon: "🎨",
      path: "/web-development",
    },
    {
      title: "Software Development",
      description: "Short description for the ones who look for something new.",
      icon: "🖌️",
      path: "/software-development",
    },
    {
      title: "Website Management",
      description: "Short description for the ones who look for something new.",
      icon: "📈",
      path: "/website-management",
    },
    {
      title: "Website Design",
      description: "Short description for the ones who look for something new.",
      icon: "📈",
      path: "/website-design",
    },
  ];

  return (
    <div className="mainservice">
      <section className="specializing-in">
        <h2>Specializing In</h2>
        <p>
          Stop wasting time and money designing and managing a website that doesn’t get results.
          Happiness guaranteed!
        </p>
        <div className="services">
          {services.map((service, index) => (
            <Link to={service.path} key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
