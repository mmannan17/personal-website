import React from 'react';
import './aboutsec.css';  // Ensure your CSS file is linked
import Wcpic from './wcpic.jpg';  // Assuming this is the path to your image

function About() {
  return (
    <div id="about-section" className="section">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>If you clicked the about section it probably means you want to learn more about me so here's some background about myself.</p>
          <p>I've always been a huge soccer fan and I was recently at the 2022 World Cup which was the greatest experience in my life. </p>
            Other than that, I'm a Software Developer.
          <p>I was born and raised in Qatar and moved to Florida 3 years ago to pursue a degree in Computer Science. I'm interested in AI, Cloud and Full-Stack Development.</p>
          <p>I've been programming for about 5 years now. I've always been around it though, as my older siblings introduced me to coding pretty early on.
          </p>
        </div>
        <div className="about-image">
          <img src={Wcpic} alt="World Cup 2022" />
        </div>
      </div>
    </div>
  );
}

export default About;