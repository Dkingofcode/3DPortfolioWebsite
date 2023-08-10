import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import { styles } from "../styles";
import { experiences } from "../constants"; 
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
   <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff'}}
   contentArrowStyle={{ borderRight: '7px solid #232631'}} date={experience.date} 
   iconStyle={{ backgound: experience.iconBg }} icon={
    <div>
      <img src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
        />
    </div>
   }>
    <div>
    <h3>{experience.title}</h3>
    <p>{experience.company_name}</p>
    </div>

    <ul>

    </ul>
   </VerticalTimelineElement>
}

const Experience = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>What i have done so far</p>
      <h2 className={styles.sectionHeadText}>
        Work Experience.
        </h2>
      </motion.div>


    </>
  )
}

export default Experience;