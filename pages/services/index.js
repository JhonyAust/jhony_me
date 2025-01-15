
import ServiceSlider from "../../components/ServiceSlider";
import Circles from "../../components/Bulb";
import Bulb from "../../components/Circles";
import Image from 'next/image'
import {easeInOut, motion} from 'framer-motion'
import { fadeIn } from '../../variants'

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles/>
    <div className="container mx-auto">
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className='h2 xl:mt-8'>
            My services <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
          variants={fadeIn('up',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden' 
           className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            As a dedicated full-stack web and mobile developer with expertise
            in MERN (MongoDB, Express, React, Node.js) and React Native, I specialize
            in creating dynamic and scalable applications that help businesses grow and succeed.
          </motion.p>
        </div>
        <motion.div 
          variants={fadeIn('down',0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'  
        className='w-full xl:max-w-[60%]'>
        <ServiceSlider/>
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Services;
