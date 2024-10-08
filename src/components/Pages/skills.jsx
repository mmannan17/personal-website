import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import { FaPython, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiDjango, DiGit } from 'react-icons/di';
import { SiC, SiCplusplus, SiCsharp, SiScikitlearn, SiNumpy, SiFlask, SiTensorflow, SiJavascript, SiVisualstudiocode, SiMysql, SiPostgresql, SiPytorch } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { SiAmazonaws, SiDocker } from 'react-icons/si';
import '../Skillssec/skills.css'; // Ensure correct path

const skills = [
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'C', icon: <SiC />, color: '#A8B9CC' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'C#', icon: <SiCsharp />, color: '#178600' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Django', icon: <DiDjango className="django-icon" />, color: '#47c022' }, // Added class here
    { name: 'Flask', icon: <SiFlask className="flask-icon" />, color: 'white' }, // Added class here
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
    { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
    { name: 'NumPy', icon: <SiNumpy />, color: '#3776AB' },
    { name: 'Git', icon: <DiGit />, color: '#F05032' },
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'SQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'PostgreSQL', icon: <SiPostgresql/>, color: '#E34F26'},
    { name: 'Docker', icon: <SiDocker/>, color: '#0db7ed'},
    { name: 'AWS', icon: <SiAmazonaws/>, color: '#FF9900'},
    { name: 'PyTorch', icon: <SiPytorch/>, color: '#F7DF1E'}


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

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Change this to true if you only want the animation to happen once
        threshold: 0.1, // Adjust as needed
    });
    
    const trail = useTrail(skills.length, {
        from: randomPosition(),
        to: inView ? toPosition() : randomPosition(), // Trigger animation on scroll
        config: { mass: 5, tension: 2000, friction: 200 }
    });

    return (
        <div id="skills-section" className="skills-section" ref={ref}>
            <h2>Skills</h2>
            <div className="skills-grid">
                {trail.map((style, index) => (
                    <SkillCard key={skills[index].name} style={style} {...skills[index]} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
