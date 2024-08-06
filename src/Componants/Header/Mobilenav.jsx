import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import logo from '../../Images/logo.png';
import './MobileNavbar.scss';

const MobileNavbar = ({ activeState, setActiveState }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const hideMenu = (id) => {
    setMenuOpen(false);
    setActiveState(id);
  };

  const navigateToHome = (id) => {
    navigate('/');
    setActiveState(id);
  };

  return (
    <nav className='MobileNavbar'>
      <img
        onClick={() => navigateToHome('home')}
        className='Logo'
        src={logo}
        alt='NWDS Logo'
      />
      <div className='Hamburger' onClick={showMenu}>
        {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </div>
      <ul className={`NavbarLinks ${menuOpen ? 'showNavbar' : ''}`}>
        <li
          id='home'
          className={activeState === 'home' ? 'active' : ''}
          onClick={() => hideMenu('home')}
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          id='about'
          className={activeState === 'about' ? 'active' : ''}
          onClick={() => hideMenu('about')}
        >
          <Link to='/aboutus'>About</Link>
        </li>
        <li
          id='services'
          className={activeState === 'services' ? 'active' : ''}
          onClick={() => hideMenu('services')}
        >
          <Link to='/services'>Services</Link>
        </li>

        <li
          id='portfolio'
          className={activeState === 'portfolio' ? 'active' : ''}
          onClick={() => hideMenu('portfolio')}
        >
          <Link to='/portfolio'>Portfolio</Link>
        </li>

        {/* <li
          id='career'
          className={activeState === 'career' ? 'active' : ''}
          onClick={() => hideMenu('career')}
        >
          <Link to='/career'>Careers</Link>
        </li> */}
        <li
          id='contact'
          className={activeState === 'contact' ? 'active' : ''}
          onClick={() => hideMenu('contact')}
        >
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
