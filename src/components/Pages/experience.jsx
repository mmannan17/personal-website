// Experience.jsx
import React from 'react';
import ExperienceCard from '../experience/experiencecard';
import styles from '../experience/experience.module.css';
import Karwa from '../images/karwa.png';
import Nsbephone from '../images/nsbephone.png'


const experiences = [
  {
    title: "Student Developer",
    company: "Mowasalat Karwa",
    period: "May 2022 - August 2022",
    description: "As part of a development team at Mowasalat, I contributed to enhancing the Karwa app's bus schedule and notification system, working under the guidance of senior developers. My role involved assisting in refining the real-time notification features and user interface, which improved the efficiency of the app and made it easier for users to receive timely bus schedule updates. This effort helped streamline the commuting process for daily users, ensuring a more user-friendly experience. Additionally, I played a role in developing the taxi booking component of the app, which included integrating features for booking, tracking, and managing taxi rides. My responsibilities extended across every cycle of the software development lifecycle (SDLC), from initial requirement gathering and analysis, through design, implementation, and testing, to deployment and maintenance. By participating in each phase, I gained comprehensive experience in developing robust and user-centric applications, ensuring that the final product met high standards of quality and performance. This holistic involvement not only improved my technical skills but also enhanced my understanding of the complete software development process and the importance of collaboration and continuous improvement in delivering successful software solutions.",
    imageUrl: Karwa
  },
  {
    title: "Professional Development Chair",
    company: "NSBE @ USF",
    period: "April 2024 - Current",
    description: "As the newly appointed Professional Development Chair for the National Society of Black Engineers @ USF, I am responsible for orchestrating and managing various professional development initiatives to support the growth and career readiness of our members. My role involves organizing and hosting events such as resume workshops, mock interview sessions, networking fairs, a semesterly career fair, and fundraising events. I am also developing and maintaining the USF NSBE LinkedIn profile in collaboration with the Publications Chair, and managing a resume database to enhance our members' visibility to corporate partners. Engaging with representatives from notable companies such as Honeywell, Duke Energy, GE Aerospace, Conmed, Accenture, and Mosaic to secure their participation in our events is a key aspect of my role. I work closely with the NSBE president, vice president, and programs chair to ensure the smooth execution of these initiatives. This role is expected to hone my leadership, event management, networking, public speaking, and strategic planning skills, significantly contributing to the professional development and career advancement of our members throughout the school year.",
    imageUrl: Nsbephone
  }
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