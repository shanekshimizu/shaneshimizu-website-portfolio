import { motion } from "framer-motion";
import React from 'react';
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

//higher order component

const ProjectWrapper = (Component, idName) => 
  function HOC() {
    return (
        //controls how the cards move on to the screen
      <motion.section
        variants={staggerContainer()} //animate the section
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} ${styles.projectWidth}  mx-auto relative z-0`} //original: max-w-7xl mx-auto relative z-0
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default ProjectWrapper;