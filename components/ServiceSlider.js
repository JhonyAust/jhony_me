import { useState,useEffect } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import useResponsiveMode from './useResponsiveMode';
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode,Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'I help businesses create a strong brand identity that stands out, from logo design to strategy, ensuring your brand connects with your audience.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'I craft intuitive, user-friendly designs that enhance the overall experience, ensuring your web or mobile app is both functional and visually appealing.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'With expertise in the MERN stack and React Native, I build scalable, secure, and high-performance web and mobile applications tailored to your needs.',
  },
 
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'I optimize websites to improve visibility, drive organic traffic, and help your site rank higher in search engines to attract more visitors..',
  },
];

const ServiceSlider = () => {
  const { isMobilePortrait, isMobileLandscape, isDesktop } = useResponsiveMode();

  return (
    <Swiper
    breakpoints={{
      320:{
        slidesPerView:1,
        spaceBetween:15,
      },
      640:{
        slidesPerView:3,
        spaceBetween:15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable:true
    }}
    modules={[FreeMode,Pagination]}
    className={`${(isMobileLandscape && !isMobilePortrait) ? 'h-[200px]' : 'h-[240px] sm:h-[340px]'} `}
    
    >
      {serviceData.map((item,index)=>{
        return(
          <SwiperSlide key={index}>
            <div className={`${(isMobileLandscape && !isMobilePortrait) ? 'bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-1 py-2 flex  gap-x-2  group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ' : 'bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 '} `}>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div>
                <div>{item.title}</div>
                <p className='text-xs'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>

          </SwiperSlide>
        )
      })}

    </Swiper>
  );
};

export default ServiceSlider;
