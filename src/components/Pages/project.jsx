import React from 'react';
import '../Projectsec/project.css';  // Importing custom CSS for styling
import Qibimage from '../images/qibimage.png';
import Embauto from '../images/embauto.png';
import Sbotify from '../images/Sbotify.webp';
import StockSmart from '../images/StockSmart.webp';
import Qibimagetab from '../images/qibimagetab.png';
import Embautotab from '../images/embautotab.png';
import Sbotifytab from '../images/Sbotifytab.webp';
import StockSmarttab from '../images/StockSmarttab.webp';
import Qibimagephone from '../images/qibimagephone.png';
import Embautophone from '../images/embautophone.png';
import Sbotifyphone from '../images/Sbotifyphone.webp';
import StockSmartphone from '../images/StockSmartphone.webp';
import ProjectCarousel from '../Projectsec/projectcarousel';

const projects = [
    {
        title: "Embassy Auto-Book",
        description: (
            <ul>
                <li><strong>Tech Stack:</strong> Python, Selenium, Bash</li>
                <li><strong>Project Purpose:</strong> I lost my passport, and the embassy had shut down passport operations, which was great timing on my part. After waiting for a really long time and repeatedly being told to check the website, I got bored of checking the website and decided to build a script that would do it for anyone stuck in the same predicament. It worked, and I got my appointment!</li>
                <li><strong>Automated System for Appointment Scheduling:</strong> Designed an automated system that schedules embassy appointments efficiently by detecting available slots and securing bookings.</li>
                <li><strong>Automated Notifications:</strong> Implemented a feature to send email confirmations automatically, ensuring that users are aware of their appointment schedules.</li>
                <li><strong>Resource Optimization:</strong> Utilized bash scripting to optimize execution and minimize resource usage, enhancing the system's efficiency.</li>
                <li><strong>Self-Termination Feature:</strong> Integrated a self-terminating feature to automatically stop the script after completing its task, improving system reliability and resource management.</li>
            </ul>
        ),
        imageUrls: {
            small: Embautophone,
            medium: Embautotab,
            large: Embauto
        },
        githubUrl: "https://github.com/mmannan17/Appointment_booker"
    },
    {
        title: "StockSmart",
        description: (
            <ul>
                <li><strong>Tech Stack:</strong> C#</li>
                <li><strong>Project Purpose:</strong> A tool for identifying key market patterns and trends to inform investment decisions.</li>
                <li><strong>Data Visualization and Pattern Recognition:</strong> Developed advanced data visualization techniques and pattern recognition algorithms to identify key market trends and patterns.</li>
                <li><strong>File Handling with C#:</strong> Implemented file handling capabilities in C# for accurate data extraction from CSV files.</li>
                <li><strong>OOP for Modular Architecture:</strong> Leveraged Object-Oriented Programming (OOP) principles to create a modular code architecture, encapsulating data in classes for enhanced maintainability.</li>
            </ul>
        ),
        imageUrls: {
            small: StockSmartphone,
            medium: StockSmarttab,
            large: StockSmart
        },
        githubUrl: "https://github.com/mmannan17/StockSmart"
    },
    {
        title: "Sbotify Bot",
        description: (
            <ul>
                <li><strong>Tech Stack:</strong> Python</li>
                <li><strong>Project Purpose:</strong> Enhances the Spotify experience on Discord by allowing playlist blending, adding songs, and providing detailed stats.</li>
                <li><strong>OAuth2 Authentication:</strong> Secured user data with OAuth2 authentication, providing personalized and secure data access.</li>
                <li><strong>Discord Bot Integration:</strong> Created a Discord bot that integrates with Spotify's API to enhance music-sharing experiences across more than 15 servers.</li>
                <li><strong>User Feedback and Improvement:</strong> Refined the bot based on user feedback, improving its functionality and user experience, which led to a 20% increase in bot usage.</li>
                <li><strong>Intuitive Bot Commands:</strong> Designed user-friendly commands for seamless interaction with the bot, making it simple to use.</li>
            </ul>
        ),
        imageUrls: {
            small: Sbotifyphone,
            medium: Sbotifytab,
            large: Sbotify
        },
        githubUrl: "https://github.com/mmannan17/Bot-features"
    },
    {
        title: "Qibla Locator",
        description: (
            <ul>
                <li><strong>Tech Stack:</strong> Flask, HTML, CSS, React.js</li>
                <li><strong>Project Purpose:</strong> Provides tools for Muslims to find the Qibla direction, prayer times, Quran translation, and prayer notifications.</li>
                <li><strong>Qibla Direction Calculation:</strong> Implemented advanced algorithms to calculate the Qibla direction and integrated a lunar calendar system using Flask.</li>
                <li><strong>Geolocation and RESTful API Integration:</strong> Utilized geographical coordinates from geolocation and RESTful API integration for accurate results.</li>
                <li><strong>Real-Time Prayer Times:</strong> Incorporated algorithmic solutions for real-time, location-specific prayer times using astronomical data.</li>
                <li><strong>User Interface:</strong> Designed a visually appealing and user-friendly interface, optimized for responsiveness.</li>
            </ul>
        ),
        imageUrls: {
            small: Qibimagephone,
            medium: Qibimagetab,
            large: Qibimage
        },
        githubUrl: "https://github.com/mmannan17/appt_booker"
    }
];

function Project() {
    return (

            
        <div id="projects-section">
                <h1>Projects</h1>
            <ProjectCarousel projects={projects} />
        </div>
    );
}

export default Project;
