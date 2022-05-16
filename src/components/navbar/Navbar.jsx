import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';
import Resume from './Resume';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portofolio__navbar">
      <div className="portofolio__navbar-links">
        <div className="portofolio__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><Resume></Resume></p>
          <p><a href="#radar">Tech Tadar</a></p>
        </div>
      </div>
      <div className="portofolio__navbar-sign">
        <p><a href="mailto:gabriela-mihaela.dinca@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a></p>
      </div>
      <div className="portofolio__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="portofolio__navbar-menu_container scale-up-center">
          <div className="portofolio__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><Resume></Resume></p>
            <p><a href="#radar">Tech Tadar</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
