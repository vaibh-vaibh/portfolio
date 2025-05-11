import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ServiceCard component for displaying individual service cards with parallax effect
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        // Removed 'options' from here because 'Tilt' takes options directly
        data-tilt-max="45"
        data-tilt-scale="1"
        data-tilt-speed="450"
      >
        <img
          src={icon}
          alt={title} // Update alt to reflect the title dynamically
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

// About section that introduces the developer and displays services
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Software Developer skilled in Java, Python, React.js, Spring Boot, JSP, Hibernate, and REST APIs. Experienced in web
        development, database management, and software architecture. Strong foundation in Data Structures & Algorithms
        (DSA), OOPs, Multithreading, String & Exception Handling. Passionate about building scalable applications.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services && services.length > 0 ? (
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        ) : (
          <p>No services available</p>
        )}
      </div>
    </>
  );
};

// Wrapping About component for section style
export default SectionWrapper(About, "about");
