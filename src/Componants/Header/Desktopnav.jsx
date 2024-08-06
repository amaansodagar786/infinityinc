import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png';
import './DesktopNavbar.scss';

const DesktopNavbar = ({ activeState, setActiveState }) => {
  const navigate = useNavigate();

  const navigateToHome = (id) => {
    navigate('/');
    setActiveState(id);
  };

  const handleLinkClick = (id) => {
    setActiveState(id);
  };

  return (
    <nav className='DesktopNavbar'>
      <img
        onClick={() => navigateToHome('home')}
        className='Logo'
        src={logo}
        alt='NWDS Logo'
      />
      <ul className='NavbarLinks'>
        <li
          id='home'
          className={activeState === 'home' ? 'active' : ''}
          onClick={() => handleLinkClick('home')}
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          id='about'
          className={activeState === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}
        >
          <Link to='/aboutus'>About</Link>
        </li>
        <li
          id='services'
          className={activeState === 'services' ? 'active' : ''}
          onClick={() => handleLinkClick('services')}
        >
          <Link to='/services'>Services</Link>
        </li>
        <li
          id='portfolio'
          className={activeState === 'portfolio' ? 'active' : ''}
          onClick={() => handleLinkClick('portfolio')}
        >
          <Link to='/portfolio'>Portfolio</Link>
        </li>

        {/* <li
          id='career'
          className={activeState === 'career' ? 'active' : ''}
          onClick={() => handleLinkClick('career')}
        >
          <Link to='/career'>Career</Link>
        </li> */}


        <li
          id='contact'
          className={activeState === 'contact' ? 'active' : ''}
          onClick={() => handleLinkClick('contact')}
        >
          <Link to='/contact'>Contact</Link>
        </li>

        
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
