import React from 'react';
import ExperienceCard from '../experience/experiencecard';
import styles from '../experience/experience.module.css';
import Jamaa from '../images/jamaa.png';
import Nsbephone from '../images/nsbephone.png';
import TKAILab from '../images/TKAI Lab.png';

const experiences = [

  {
    title: "AI/ML Research Assistant",
    company: "TKAI Lab",
    period: "Ma 2024 - Present",
    description: [
      "Conducting in-depth analysis of neural network stability, focusing on advanced architectures like RNNs, LSTMs, and Transformers to ensure robust performance under varying conditions.",
      "Applying higher-order methods such as regularization and adversarial training to improve stability and mitigate sensitivity to adversarial attacks, enhancing model security and reliability.",
      "Developing 4 novel recurrent architectures inspired by automata theory and designed for Lyapunov stability, addressinglongstanding issues of learnability and stability in neural networks to enhance performance and generalization.",
      "Optimized Memory Augmented RNNs by visualizing activation functions, resulting in a 10% increase in push/pop predictionaccuracy. Achieving 10% increase in model stability.",
      "Optimizing neural architectures by reducing computational complexity through techniques like pruning and quantization, while maintaining high accuracy and efficiency for deployment in resource-constrained environments.",
      "Collaborating with research teams to drive innovation in neural network stability, leveraging insights from literature reviews and real-world applications to push the boundaries of model robustness."
  ],
  imageUrl: TKAILab
  
  

  },

  {
    title: "Co-Founder & Full Stack Developer",
    company: "Jamaa",
    period: "December 2023 - Current",
    description: [
      "Led the development of a recently acquired cross-platform mobile application with React Native and Django, creating an intuitive interface for users to connect with nearby mosques and events.",
      "Optimized backend performance by implementing Redis caching and enhancing PostgreSQL queries, resulting in a 50% reduction in server load times.",
      "Designed a location-based algorithm that suggests nearby mosques and events, reducing average response time from 200ms to 65ms for improved user experience. ",
      "Deployed the application on AWS Elastic Beanstalk with Docker, achieving a robust infrastructure that supports 99.9% uptime.",
      "Developed 25+ RESTful APIs to facilitate data exchange across features and implemented JWT-based authentication with role-based access for secure interactions.",
      "Enhanced AI verification processes through GenAI by leveraging LLMs to parse and evaluate legal documents, enabling automated validation of mosque credentials and prayer schedules",
      "Collaborated throughout the software development lifecycle (SDLC), from planning and design to implementation, testing, and deployment, ensuring a high-quality and user-focused product."
    ],
    imageUrl: Jamaa
  },
  {
    title: "Professional Development Chair",
    company: "NSBE @ USF",
    period: "April 2024 - Present",
    description: [
      "Orchestrating and managing various professional development initiatives to support the growth and career readiness of our members.",
      "Organizing and hosting events such as resume workshops, mock interview sessions, networking fairs, a semesterly career fair, and fundraising events.",
      "Developing and maintaining the USF NSBE LinkedIn profile in collaboration with the Publications Chair, and managing a resume database to enhance our members' visibility to corporate partners.",
      "Engaging with representatives from notable companies such as Honeywell, Duke Energy, GE Aerospace, Conmed, Accenture, and Mosaic to secure their participation in our events.",
      "Working closely with the NSBE president, vice president, and programs chair to ensure the smooth execution of these initiatives.",
      "Honing leadership, event management, networking, public speaking, and strategic planning skills, significantly contributing to the professional development and career advancement of our members."
    ],
    imageUrl: Nsbephone
  },
  
];

const Experience = () => {
  return (
    <div id='experience-section' className={styles.experienceContainer}>
      <div id='experience-title' className={styles.experienceTitle}>
        <h1>Experience</h1>
        </div>
      <div className={styles.container}>
        <ExperienceCard experiences={experiences} />
      </div>
    </div>
  );
}

export default Experience;
