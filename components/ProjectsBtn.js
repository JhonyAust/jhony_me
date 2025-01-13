import Image from 'next/image';
import Link from 'next/link' ;
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 mb-2 sm:mb-20 z-50'>
      <Link
        href={'/work'}
        className='relative w-[120px] h-[120px] flex justify-center items-center
        bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <Image
        src={'/rounded-text.png'}
        width={121}
        height={128}
        att=''
        className='animate-spin-slow w-full h-full max-w-[100px] max-h-[100px]'
      />
      <HiArrowRight className='absolute text-3xl group-hover:translate-x-2
      transition-all duration-300'/>
      </Link>
    </div>

  );
};

export default ProjectsBtn;
