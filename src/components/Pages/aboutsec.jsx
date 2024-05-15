import React from 'react';
import '../about/aboutsec.css'; 
import Wcpic from '../about/wcpic.jpg';

function About() {
    return (
        <article id="about-section" className="section">
            <header>
                <h1>About Me</h1>
            </header>
            <div className="about-content">
                <div className="about-text">
                    <p>If you clicked the about section, it probably means you want to learn more about me. Here's some background information about myself.</p>
                    <p>I've always been a huge soccer fan and I was at the 2022 World Cup which was the greatest experience of my life.</p>
                    <p>Other than that, I'm a Software Developer. I was born and raised in Qatar and moved to Florida 3 years ago to pursue a degree in Computer Science. I'm interested in AI, Cloud, and Full-Stack Development.</p>
                    <p>I've been programming for about 5 years now. I've always been around it though, as my older siblings introduced me to coding pretty early on.</p>
                    <p>I'm an avid problem solver and team player, I love working on challenging problems that make you scratch your head.</p>
                </div>
                <div className="about-image">
                    <img src={Wcpic} alt="World Cup 2022" />
                </div>
            </div>
        </article>
    );
}

export default About;
