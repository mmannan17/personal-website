import React from 'react';
import './sections.css';

function Section() {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="section-container">
            <button className="section-button" onClick={() => scrollToElement('about-section')}>About</button>
            <button className="section-button" onClick={() => scrollToElement('projects-section')}>Projects</button>
            <button className="section-button" onClick={() => scrollToElement('experience-section')}>Experience</button>
            <button className="section-button" onClick={() => scrollToElement('skills-section')}>Skills</button>
            <button className="section-button" onClick={() => scrollToElement('leadership-section')}>Leadership</button>
        </div>
    );
}

export default Section;
