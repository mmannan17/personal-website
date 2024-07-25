import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import { FaPython, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiDjango, DiGit } from 'react-icons/di';
import { SiC, SiCplusplus, SiCsharp, SiScikitlearn, SiNumpy, SiFlask, SiTensorflow, SiJavascript, SiVisualstudiocode, SiMysql, SiPostgresql, SiAmazonaws, SiDocker } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import '../about/aboutsec.css';

const skills = [
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'C', icon: <SiC />, color: '#A8B9CC' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'C#', icon: <SiCsharp />, color: '#178600' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Django', icon: <DiDjango className="django-icon" />, color: '#47c022' },
    { name: 'Flask', icon: <SiFlask className="flask-icon" />, color: 'white' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
    { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
    { name: 'NumPy', icon: <SiNumpy />, color: '#3776AB' },
    { name: 'Git', icon: <DiGit />, color: '#F05032' },
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'SQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#E34F26' },
    { name: 'Docker', icon: <SiDocker />, color: '#0db7ed' },
    { name: 'AWS', icon: <SiAmazonaws />, color: '#FF9900' }
];

const randomPosition = () => ({
    transform: `translate(${Math.random() * 1000 - 500}px, ${Math.random() * 1000 - 500}px)`,
    opacity: '0'
});

const toPosition = () => ({
    transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
    opacity: '1'
});

const SkillCard = ({ name, icon, color, style }) => (
    <animated.div style={{ ...style, borderColor: color }} className="skill-card">
        <div className="icon" style={{ color }}>
            {icon}
        </div>
        <h3>{name}</h3>
    </animated.div>
);

const AboutAndSkills = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1, 
    });

    const trail = useTrail(skills.length, {
        from: randomPosition(),
        to: inView ? toPosition() : randomPosition(), 
        config: { mass: 5, tension: 2000, friction: 200 }
    });

    return (
        <section id="about-skills-section" className="about-skills-section">
            <div className="about-content">
                <header id="about-section">
                    <h1>About Me</h1>
                </header>
                <div className="about-text">
                    <p>If you clicked the about section, it probably means you want to learn more about me. Here's some background information about myself.</p>
                    <p>I've always been a huge soccer fan and I was at the 2022 World Cup which was the greatest experience of my life.</p>
                    <p>Other than that, I'm a Software Developer. I was born and raised in Qatar and moved to Florida 3 years ago to pursue a degree in Computer Science. I'm interested in AI, Cloud, and Full-Stack Development.</p>
                    <p>I've been programming for about 5 years now. I've always been around it though, as my older siblings introduced me to coding pretty early on.</p>
                    <p>I'm an avid problem solver and team player, I love working on challenging problems that make you scratch your head.</p>
                </div>
            </div>
            <div className="skills-content">
                <div id="skills-section" className="skills-section" ref={ref}>
                    <h2>Skills</h2>
                    <div className="skills-grid">
                        {trail.map((style, index) => (
                            <SkillCard key={skills[index].name} style={style} {...skills[index]} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAndSkills;
