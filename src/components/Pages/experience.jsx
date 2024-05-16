import React from 'react';
import ExperienceCard from '../experience/experiencecard';
import styles from '../experience/experience.module.css';
import Karwa from '../images/karwa.png';
import Nsbephone from '../images/nsbephone.png';

const experiences = [
  {
    title: "Student Developer",
    company: "Mowasalat Karwa",
    period: "May 2022 - August 2022",
    description: [
      "Contributed to enhancing the Karwa app's bus schedule and notification system, working under the guidance of senior developers.",
      "Assisted in refining the real-time notification features and user interface, improving the efficiency of the app and making it easier for users to receive timely bus schedule updates.",
      "Developed the taxi booking component of the app, including integrating features for booking, tracking, and managing taxi rides.",
      "Involved in every cycle of the software development lifecycle (SDLC), from initial requirement gathering and analysis, through design, implementation, and testing, to deployment and maintenance.",
      "Gained comprehensive experience in developing robust and user-centric applications, ensuring high standards of quality and performance.",
      "Improved technical skills and understanding of the complete software development process and the importance of collaboration and continuous improvement in delivering successful software solutions."
    ],
    imageUrl: Karwa
  },
  {
    title: "Professional Development Chair",
    company: "NSBE @ USF",
    period: "April 2024 - Current",
    description: [
      "Orchestrating and managing various professional development initiatives to support the growth and career readiness of our members.",
      "Organizing and hosting events such as resume workshops, mock interview sessions, networking fairs, a semesterly career fair, and fundraising events.",
      "Developing and maintaining the USF NSBE LinkedIn profile in collaboration with the Publications Chair, and managing a resume database to enhance our members' visibility to corporate partners.",
      "Engaging with representatives from notable companies such as Honeywell, Duke Energy, GE Aerospace, Conmed, Accenture, and Mosaic to secure their participation in our events.",
      "Working closely with the NSBE president, vice president, and programs chair to ensure the smooth execution of these initiatives.",
      "Honing leadership, event management, networking, public speaking, and strategic planning skills, significantly contributing to the professional development and career advancement of our members."
    ],
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
