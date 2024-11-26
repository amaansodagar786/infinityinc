import React from "react";
import './Services.scss';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Short description for the ones who look for something new.",
      icon: "🎨", // Replace this with your SVG or icon
    },
    {
      title: "Software Development",
      description: "Short description for the ones who look for something new.",
      icon: "🖌️", // Replace this with your SVG or icon
    },
    {
      title: " Website Management",
      description: "Short description for the ones who look for something new.",
      icon: "📈", // Replace this with your SVG or icon
    },
    {
      title: " Website Design",
      description: "Short description for the ones who look for something new.",
      icon: "📈", // Replace this with your SVG or icon
    },
  ];

  return (
    <div className="mainservice">
      <section className="specializing-in">
        <h2>Specializing In</h2> 
        {/* <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}>Specializing In</h2> */}

        <p>
          Stop wasting time and money designing and managing a website that doesn’t get results.
          Happiness guaranteed!
        </p>
        <div className="services">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
      );
};

      export default Services;
