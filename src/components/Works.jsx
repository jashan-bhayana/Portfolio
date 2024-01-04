import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../highorderComponet";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const ProjectCard = ({ index,name,description,tags,image,source_code_link}) => {
  return(
    <motion.div variants={fadeIn('up','spring',index * 0.5,0.75)}>testwork</motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the works I have done so far which showcase my
          skills,learning and experience through real-world examples of my work.
          Each project is a unique opportunity to showcase my skills and
          expertise in a specific area and there are links to code repositories.
        </motion.div>
   <div className="mt-20 flex flex-wrap gap-7"
   >

   {projects.map((project, index) => (
    <ProjectCard 
    key={`project-${index}`}
    index = {index}
    {...project}
   
   />
   ))}
   </div>

      </div>

    </>
  );
};

export default SectionWrapper(Works, "");
