import React from 'react';
import Layout from "../../layout";
import Introduction from "../Introduction";
import About from "../Pages/aboutsec";
import Projects from "../Pages/project";
import NavBar from '../Navbarsec/navbar'; // Ensure the path is correct
import Experience from '../Pages/experience';
import '../home.css';

function Home() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id='home-section'>
            <NavBar scrollTo={scrollTo} />
            <Layout>
                <Introduction />
                <div id="about-section">

                    <About />
                </div>
                <div id="project-section">
                
                    <Projects />
                </div>
                <div id="experience-section">
    
                    <Experience />
                </div>
            </Layout>
        </div>
    );
}

export default Home;
