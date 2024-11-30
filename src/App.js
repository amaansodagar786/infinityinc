import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import About from './Componants/AboutUs/About';
import Footer from './Componants/Footer/Footer';
import Gototop from './Componants/Gototop/Gototop';
import Services from './Componants/Services/Services';
import MyLoader from './Componants/Myloader/Myloader';
import Portfolio from './Componants/Portfolio/Portfolio';
import Webdevelop from './Componants/Services/Subservices/Webdevelop';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Track route changes

  useEffect(() => {
    // Show loader for 2-3 seconds on initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change to 2000 for 2 seconds

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show loader for 2-3 seconds on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Change to 2000 for 2 seconds

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, [location.pathname]); // Dependency on route changes

  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <Gototop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/loader" element={<MyLoader />} />
            <Route path="/web-development" element={<Webdevelop />} />
            
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
