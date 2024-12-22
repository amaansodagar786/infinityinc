import React from "react";
import './Myloader.scss';

const MyLoader = () => {
  return (
    <div className="loader-container">
      <div className="infinity-loader">
        <div className="loop"></div>
        <div className="loop"></div>
      </div>
    </div>
  );
};

export default MyLoader;
