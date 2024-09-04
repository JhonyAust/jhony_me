import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-4 xl:px-0 xl:h-[90px] '>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2 lg:gap-y-0 py-4 lg:py-6'>
          <Link href={'/'}>
            <div className='cursor-pointer'>
              <Image
                src={'/rayhan.svg'}
                width={220}
                height={48}
                alt=''
                priority={true}
              />
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
