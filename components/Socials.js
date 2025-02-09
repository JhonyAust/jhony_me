import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiPinterestLine,
  RiGithubLine,
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg z-50'>
      <Link href={'https://www.youtube.com/@rayhanjhony75'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://github.com/JhonyAust'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.facebook.com/jhonyaustcse37'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/rayhan-jhony-baa53a1a9/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.facebook.com/jhonyaustcse37'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
