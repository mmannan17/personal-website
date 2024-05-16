import React from 'react';
import Slider from 'react-slick';
import styles from './experience.module.css';

const ExperienceCard = ({ experiences }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    };

    return (
        <div className={styles.experienceSection}>
            <Slider {...settings}>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.experienceCard}>
                        <div className={styles.imageContainer}>
                            <img src={exp.imageUrl} alt={`${exp.company} logo`} className={styles.experienceImage} />
                        </div>
                        <div className={styles.content}>
                            <h2>{exp.title}</h2>
                            <h3>{exp.company}</h3>
                            <p className={styles.period}>{exp.period}</p>
                            <div className={styles.scrollContent}>
                                <ul className={styles.description}>
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ExperienceCard;

