import React from 'react';
import LinkedinLogo from './linkedinlogo.jpeg'; // Assuming the path is correct
import './Logos.css'; // Ensures styles are applied
import githublogo from './githublogo.png';

function Logos() {
  return (
    <div className='logo-container'>
        <a href="https://www.linkedin.com/in/mustafa-mannan" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinLogo} alt="LinkedIn" className="linkedin-logo" />
        </a>
        <a href="https://github.com/mmannan17" target="_blank" rel="noopener noreferrer">
            <img src={githublogo} alt="github" className='github-logo' />
        </a>
    </div>
  );
}

export default Logos;
