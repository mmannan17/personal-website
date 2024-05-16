import React from 'react';
import './intro.css';  
import Imageweb from './Imageweb.png';
import Typewriter from './texteffect/Typewriter';
import './sec/sections.css';

function Introduction() {

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="intro-container">
        <img src={Imageweb} alt="Mustafa Mannan" className="my-image" />
        <h1>
            <Typewriter texts={['Hello I\'m Mustafa Mannan !','I\'m a Senior @ The University Of South Florida','Studying CS to become a Software Engineer']}  speed={80} /> 
        </h1>
        <div id='navsec'>

          <button className="section-button" onClick={() => scrollTo('about-section')}>About</button>
          <button className="section-button" onClick={() => scrollTo('project-section')}>Projects</button>
          <button className="section-button" onClick={() => scrollTo('experience-section')}>Experience</button>
          <button className="section-button" onClick={() => scrollTo('skills-section')}>Skills</button>
          
        </div>




    </div>


    
  );
}

export default Introduction;



