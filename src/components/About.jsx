import React from "react";
import { Tilt } from "react-tilt"; //creates tilf effect when hovering over cards
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, verify_link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
    >
      <div onClick={() => window.open(verify_link, "_blank")} 
        options={{ //can adjust how the cards tilt
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-zinc-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      > 
        <img
          src={icon} //change the icons to own
          alt='web-development'
          className='w-20 h-20 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        4x AWS and Security+ Certified. Currently studying for Terraform Associate. <br></br>Click on each card to verify my achievement.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'> {/*original: 'mt-20 flex flex-wrap gap-10'*/}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");