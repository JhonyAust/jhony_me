import Image from 'next/image'
import { useEffect, useState } from 'react';
// components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjrctionBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
// framer motion
import {easeInOut, motion} from 'framer-motion'
// variants
import { fadeIn } from '../variants'
import ProjectsBtn from '../components/ProjectsBtn'
import useResponsiveMode from '../components/useResponsiveMode';
const Home = () => {
  const { isMobilePortrait, isMobileLandscape, isDesktop } = useResponsiveMode();

  return (
    <div className='bg-primary/60 h-full'>
      {/*text*/}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via black/30 to-black/10'>
        <div className={`${(isMobileLandscape && !isMobilePortrait) ? 'text-center flex flex-col justify-center ' : 'text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto '}`}>
          {/*title*/}
          <motion.h1
             variants={fadeIn('down',0.2)}
             initial='hidden'
             animate='show'
             exit='hidden' 
            className={`${(isMobileLandscape && !isMobilePortrait) ? ' mt-24 text-lg' : 'sm:mt-14 text-3xl md:text-4xl md:h2  '}`}>
            Empowering Businesses<br/>Through{' '}
            <span className='text-accent'>Web Innovation</span>
          </motion.h1>
          { /*subtitle*/ }
          <motion.p
             variants={fadeIn('down',0.3)}
             initial='hidden'
             animate='show'
             exit='hidden'
             className={`${(isMobileLandscape && !isMobilePortrait) ? 'text-xs max-w-xl p-4  mx-auto' : 'max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 mt-4 '}`}> 
          
            Versatile MERN and React Native Developer skilled in creatin dynamic
             web and mobile applications. Proficient in front-end and bacgk-end development,
            I specialize in crafting seamless user experiences and scalable solutions.
          </motion.p>
          { /* btn */ }
          <div className={`${(isMobileLandscape && !isMobilePortrait) ? 'flex justify-center pb-20 relative' : 'flex justify-center xl:hidden relative'}`}>
            <ProjectsBtn/>
          </div>
          <motion.div
            variants={fadeIn('down',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn/>
          </motion.div>
          </div>      
      </div>
      
      { /*image*/ }
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
      xt:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
      </div>
      <ParticlesContainer/>
      <motion.div 
        variants={fadeIn('up',0.5)}
        initial='hidden'
        animate='show'
        exit='hidden' 
        transition={{duration:1,ease:easeInOut}}
        className='w-full h-full max-w-[737px] max-h-[623px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
      <Avatar/>
      </motion.div>
      </div>
    </div>
    
  );
};

export default Home;
