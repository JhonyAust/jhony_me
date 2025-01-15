import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Md. Riyadh Arafat Amin',
    position: 'Client',
    message:
      'Working with this team has been an exceptional experience. Their attention to detail and dedication to delivering quality exceeded my expectations!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Md. Rishad Arafat Amin',
    position: 'Client',
    message:
      'Highly professional and responsive. The project was delivered on time and the final result was absolutely fantastic. Highly recommend their services!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Rakib Hasan',
    position: 'Customer',
    message:
      'Outstanding work! The team demonstrated a strong understanding of the requirements and provided innovative solutions throughout the project.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[260px]'
    >
      {testimonialData.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className='p-4 flex flex-col items-center'>
            <Image
              src={testimonial.image}
              width={80}
              height={80}
              className='rounded-full'
              alt={testimonial.name}
            />
            <h3 className='mt-4 text-lg font-semibold'>{testimonial.name}</h3>
            <p className='text-sm text-gray-600'>{testimonial.position}</p>
            <p className='mt-2 pb-4 text-center max-w-lg  '>{testimonial.message}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
