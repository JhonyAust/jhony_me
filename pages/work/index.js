
import WorkSlider from "../../components/WorkSlider";
import Circles from "../../components/Bulb";
import Bulb from "../../components/Circles";
import Image from 'next/image'
import {easeInOut, motion} from 'framer-motion'
import { fadeIn } from '../../variants'
import useResponsiveMode from "../../components/useResponsiveMode";
const Work = () => {
  const { isMobilePortrait, isMobileLandscape, isDesktop } = useResponsiveMode();
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles/>
    <div className="container mx-auto">
      <div className={`flex ${(isMobileLandscape && !isMobilePortrait) ? 'flex-row' : 'flex-col'} xl:flex-row gap-x-8`}>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className={`flex ${(isMobileLandscape && !isMobilePortrait) ? 'mt-52 h2 text-2xl' : 'h2 justify-center sm:justify-normal sm:mt-12'} `}>
            My Works <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
          variants={fadeIn('up',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden' 
           className={`flex ${(isMobileLandscape && !isMobilePortrait) ? 'max-w-[400px] text-xs mx-auto ' : 'max-w-[400px] mx-auto lg:mx-0'}`} >
          Explore live projects that highlight my full-stack development skills,
          with a focus on performance, scalability, and user experience. 
          View project snippets and interactive demos to see the results in action.
          </motion.p>
        </div>
        <motion.div 
          variants={fadeIn('down',0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'  
        className={` ${(isMobileLandscape && !isMobilePortrait)? ' max-w-[40%] mt-52    ' : 'w-full xl:max-w-[55%] mt-2 xl:mt-12'}`}>
        <WorkSlider/>
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Work;
