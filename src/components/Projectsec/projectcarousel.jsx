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
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <img 
                            src={project.imageUrls.large}  // Fallback image for older browsers
                            srcset={`${project.imageUrls.small} 375w, ${project.imageUrls.medium} 700w, ${project.imageUrls.large} 1200w`} 
                            sizes="(max-width: 768px) 375px, (max-width: 1024px) 700px, 1200px"
                            alt={project.title}
                            className={project.title === "StockSmart" ? "stock-smart-special" : ""}
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