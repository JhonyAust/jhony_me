// data
// const workSlides = {
//   slides: [
//     {
//       images: [
//         {
//           title: 'mutual',
//           path: '/project2.png',
//           link: 'https://mutual-property.com', // Add link for each project
//         },
        
//       ],
//     },
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/project3.png',
//           link: 'https://github.com/JhonyAust/City-Car-Driving',
//         },
        
//       ],
//     },
//     {
//       images: [
//         {
//           title: 'ecommerce',
//           path: '/project1.png',
//           link: 'https://ecommerce-shop-react-app-master-main.vercel.app/',
//         },
        
//       ],
//     },
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/project2.png',
//           link: 'https://mutual-property.com',
//         },
       
//       ],
//     },
   
//   ],
// };
const workSlides = [
  { title: 'mutual', path: '/project2.png', link: 'https://mutual-property.com' },
  { title: 'title', path: '/project3.png', link: 'https://github.com/JhonyAust/City-Car-Driving' },
  { title: 'ecommerce', path: '/project1.png', link: 'https://ecommerce-shop-react-app-master-main.vercel.app/' },
  { title: 'example', path: '/project2.png', link: 'https://mutual-property.com' },
  { title: 'example2', path: '/thumb1.jpg', link: 'https://example.com/project5' },
];



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const WorkSlider = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client side
    setIsClient(true);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Render a consistent layout during SSR
  if (!isClient) {
    return (
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-[200px] sm:h-[480px]"
      >
        {workSlides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
              <div className="bg-gray-200 h-48 w-48"></div> {/* Placeholder */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  // Render the actual content after hydration
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[200px] sm:h-[480px]"
    >
      {isMobile
        ? workSlides.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image src={image.path} width={400} height={250} alt={image.title} />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#308eca] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">LIVE</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))
        : [...Array(Math.ceil(workSlides.length / 4))].map((_, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="grid grid-cols-2 gap-4">
                {workSlides
                  .slice(groupIndex * 4, groupIndex * 4 + 4)
                  .map((image, index) => (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    >
                      <a href={image.link} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center justify-center relative overflow-hidden group">
                          <Image src={image.path} width={400} height={250} alt={image.title} />
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#308eca] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                              <div className="delay-100">LIVE</div>
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                PROJECT
                              </div>
                              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default WorkSlider;