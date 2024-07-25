import React, { useState } from 'react';
import './navbar.css';
import menuIcon from '../menu.png'; // Correct the path
import Logos from '../logos'; // Ensure the path is correct

function NavBar({ scrollTo }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleScrollTo = (section) => {
    scrollTo(section);
    setMenuVisible(false); // Close the menu after clicking
  };

  return (
    <nav className={`navbar ${menuVisible ? 'tinted' : ''}`}>
      <div className="left-container">
        <button className="menu-button" onClick={handleToggleMenu}>
          <img src={menuIcon} alt="Menu" className="menu-icon" />
        </button>
        <div className={`dropdown-menu ${menuVisible ? 'show' : ''}`}>
          <button className="menu-item" onClick={() => handleScrollTo('home-section')}>Home</button>
          <button className="menu-item" onClick={() => handleScrollTo('about-section')}>About</button>
          <button className="menu-item" onClick={() => handleScrollTo('skills-section')}>Skills</button>
          <button className="menu-item" onClick={() => handleScrollTo('project-section')}>Projects</button>
          <button className="menu-item" onClick={() => handleScrollTo('experience-title')}>Experience</button>
        </div>
      </div>
      <div className="right-container">
        <Logos />
      </div>
    </nav>
  );
}

export default NavBar;
