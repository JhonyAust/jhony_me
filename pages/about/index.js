import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop,SiMongodb, SiTailwindcss,SiReact } from "react-icons/si";
import Circles from "../../components/Circles";
import { easeInOut, motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web & Mobile App Development',
                icons: [
                    <FaReact key="react" />,      // React
                    <FaJs key="js" />,           // JavaScript
                    <SiNextdotjs key="nextjs" />, // Next.js
                    <FaNodeJs key="nodejs" />,   // Node.js
                    <SiMongodb key="mongodb" />, // MongoDB
                    <SiTailwindcss key="tailwind" />, // Tailwind CSS
                    <SiFramer key="framer" />,   // Framer Motion
                    <FaWordpress key="wordpress" />, // WordPress
                   
                ],
            },
            {
                title: 'UI/UX Design',
                icons: [
                    <FaFigma key="figma" />,
                    <SiAdobexd key="adobexd" />,
                    <SiAdobephotoshop key="photoshop" />,
                ],
            },
        ],
    },
    
    {
        title: 'experience',
        info: [
           
            {
                title: 'Web Developer - Mutual Property Limited',
                stage: '2021 to Present',
            },
            
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Certified Mern Stack Developer - CodersTrust Bangladesh',
                stage: '2024',
            },
            {
                title: 'B.Sc in CSE - Ahsanullah University of Science and Technology',
                stage: '2020',
            },
           
        ],
    },
    {
        title: 'CP Skills',
        info: [
            {
                title: 'Intra AUST Programming Contest',
                
            },
            {
                title: <a href="https://codeforces.com/profile/Jhony_aust" target="_blank" className="text-white/60 hover:text-accent">Codeforces</a>,
                
            },
            {
                title: <a href="https://leetcode.com/jhonyaustcse37/" target="_blank" className=" text-white/60 hover:text-accent">LeetCode</a>
                
            },
           
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true); // Ensures this runs only after the component has mounted
    }, []);

    if (!hasMounted) {
        return null; // Return nothing or a loader until the component is fully mounted
    }

    return (
        <div className='bg-primary/30 py-32 text-center xl:text-left h-full'>
            <Circles />
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden xl:flex absolute bottom-0 -left-[370px]'
            >
                {/* <Avatar /> */}
            </motion.div>

            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                <div className='flex-1 flex flex-col justify-center'>
                    <motion.h2
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-2xl sm:text-4xl '>
                        Crafting <span className='text-accent'>code</span> that transforms visions into reality.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='max-w-[800px] md:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-xs sm:text-base'>
                       Passionate Web & App Developer skilled in MERN stack, React Native, and WordPress. With evolving problem-solving abilities,
                        I focus on crafting responsive, scalable, and high-performing applications while continuously enhancing my expertise.
                    </motion.p>
                    {/* counters */}
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
                        <div className='flex flex-1 xl:gap-x-6'>
                            {/* experience */}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={4} duration={5} /> +
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Years of experience
                                </div>
                            </div>
                            {/* clients */}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={5} duration={5} /> +
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Satisfied Customers
                                </div>
                            </div>
                            {/* Project */}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={10} duration={5} /> +
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Finished Projects
                                </div>
                            </div>
                            <div className='relative flex-1'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={4} duration={5} /> +
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Gain Certificates
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex flex-col w-full xl:max-w-[50%] h-[440px]'>
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4  mt-4'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                key={itemIndex}
                                className={`cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 
                                            ${index === itemIndex ? 'text-accent after:w-[100%] after:bg-white' : 'after:w-8 after:bg-transparent'}`}
                                onClick={() => setIndex(itemIndex)}
                              >
                                {item.title}
                              </div>
                              
                            );
                        })}
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                                    {item.stage && <div className='hidden md:flex'>-</div>}
                                    <div>{item.stage}</div>
                                    <div className='flex gap-x-4 '>
                                        {item.icons?.map((icon, iconIndex) => {
                                            return (
                                                <div className='text-2xl text-white' key={iconIndex}>
                                                    {icon}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
