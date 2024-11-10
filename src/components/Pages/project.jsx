import React from 'react';
import '../Projectsec/project.css';  // Importing custom CSS for styling
import soccer from '../images/soccer.png';
import Embauto from '../images/embauto.png';
import fraud from '../images/Fraud.webp';
import StockSmart from '../images/StockSmart.webp';
import soccerm from '../images/soccerm.png';
import Embautotab from '../images/embautotab.png';
import fraudm from '../images/Fraudm.webp';
import StockSmarttab from '../images/StockSmarttab.webp';
import soccers from '../images/soccers.png';
import Embautophone from '../images/embautophone.png';
import frauds from '../images/Frauds.webp';
import StockSmartphone from '../images/StockSmartphone.webp';
import ProjectCarousel from '../Projectsec/projectcarousel';

const projects = [
    {
        title: "Financial Fraud Detection",
        description: (
            <ul className="project-info financial-fraud">
                <li><strong>Tech Stack:</strong> Python, PyTorch, GNN, Scikit-learn, PostgreSQL</li>
                <li><strong>Git Repo Status:</strong> Private</li>
                <li><strong>Project Purpose:</strong> Detects financial fraud by analyzing relationships and patterns in data using Graph Neural Networks (GNNs).</li>
                <li><strong>Graph-Based Modeling:</strong> Structured transaction data as graphs to identify complex patterns indicative of fraudulent behavior.</li>
                <li><strong>GNN Implementation:</strong> Developed and trained GNN models to improve fraud detection accuracy by 20% over traditional methods.</li>
                <li><strong>Training Optimization:</strong> Utilized CUDA and hyperparameter tuning to optimize model training time.</li>
                <li><strong>Results and Impact:</strong> Increased real-time fraud detection capabilities, reducing false positives and enhancing security for financial institutions.</li>
            </ul>
        ),
        imageUrls: {
            small: frauds,
            medium: fraudm,
            large: fraud
        },
        githubUrl: "https://github.com/mmannan17/Bot-features"
    },
    {
        title: "Soccer Performance Insights: ML Approach",
        description: (
            <ul className="project-info soccer-performance">
                <li><strong>Tech Stack:</strong> Python, TensorFlow, Pandas, Matplotlib, SQL</li>
                <li><strong>Git Repo Status:</strong> Private</li>
                <li><strong>Project Purpose:</strong> Provides insights into key soccer performance indicators for improved match strategies and player development.</li>
                <li><strong>Data Processing:</strong> Cleaned and processed extensive match and player statistics datasets for ML model training.</li>
                <li><strong>Feature Engineering:</strong> Applied feature selection and engineering techniques to enhance predictive accuracy.</li>
                <li><strong>Visual Dashboard:</strong> Created dashboards displaying performance trends over time, aiding coaches and analysts.</li>
                <li><strong>Results and Impact:</strong> Delivered actionable insights that informed strategic training and match preparation.</li>
            </ul>
        ),
        imageUrls: {
            small: soccers,
            medium: soccerm,
            large: soccer
            
        },
        githubUrl: "https://github.com/mmannan17/appt_booker"
    },
    {
        title: "Embassy Auto-Book",
        description: (
            <ul>
                <li><strong>Tech Stack:</strong> Python, Selenium, Bash</li>
                <li><strong>Git Repo Status: Private</strong></li>
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
                <li><strong>Git Repo Status: Public</strong></li>
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
