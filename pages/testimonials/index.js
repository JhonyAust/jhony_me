import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import TestimonialSlider from '../../components/TestimonialSlider';
import useResponsiveMode from '../../components/useResponsiveMode';
const Testimonials = () => {
  const { isMobilePortrait, isMobileLandscape, isDesktop } = useResponsiveMode();
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='mx-auto h-full flex flex-col justify-center'>
        <motion.h2 
          initial='hidden'
          animate='show'
          exit='hidden'
          variants={fadeIn('down', 0.4)}
          className={`${(isMobileLandscape && !isMobilePortrait) ? 'h2 text-2xl' : 'h2 text-4xl'} `}
        >
          What clients <span className='text-accent'>say</span>
        </motion.h2>
        <motion.div 
          className={`${(isMobileLandscape && !isMobilePortrait) ? '' : 'mt-4'} `}
          initial='hidden'
          animate='show'
          exit='hidden'
          variants={fadeIn('up', 0.4)}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
