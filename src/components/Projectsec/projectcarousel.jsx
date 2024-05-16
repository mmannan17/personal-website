import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './project.css'; // Make sure your styles are defined here

const ProjectCarousel = ({ projects }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <Slider {...settings}>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <img 
                            src={project.imageUrls.large}  // Single image source
                            alt={project.title}
                            className="project-image"
                        />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                </div>
            ))}
        </Slider>
    );
};

export default ProjectCarousel;
