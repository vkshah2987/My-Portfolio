/* eslint-disable no-unused-vars */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[250px] sm:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient !p-[1px] rounded-[20px]'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-[#276E6B] rounded-[20px] !py-5 !px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center break-words whitespace-normal '>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='!mt-4 text-[#0E2F3E] text-[17px] max-w-5xl leading-[30px]'
      >
        I'm a Software Engineer specializing in the MEAN / MERN stack with hands-on experience in building 
        scalable web applications and integrating GenAI-driven workflows in enterprise environments. At Accenture, 
        I've contributed to large-scale product improvements for Ecolab's Food Safety and Quality platform—enhancing 
        dashboards, optimizing backend performance, and helping develop an internal RAG-based knowledge assistant 
        using LangChain and GPT APIs.
      </motion.p>

      <div className='!mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')