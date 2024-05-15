import React from 'react';
import Slider from 'react-slick';
import styles from './experience.module.css'

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
        
        <Slider {...settings}>
            {experiences.map((exp, index) => (
                <div className={styles.experienceCard}>
                <div className={styles.imageContainer}>
                    <img src={exp.imageUrl} alt={`${exp.company} logo`} className={styles.experienceImage} />
                </div>
                <div className={styles.content}>
                    <h2>{exp.title}</h2>
                    <h3>{exp.company}</h3>
                    <p className={styles.period}>{exp.period}</p>
                    <p>{exp.description}</p>
                </div>
            </div>
            ))}
        </Slider>
    );
};

export default ExperienceCard;
