import Image from "next/image"
const Avatar = () => {
        return ( 
          <div className='hidden xl:flex xl:max-w-none '>
            <Image
              src={'/jhon2.png'}
              width={737}
              height={678}
              att=''
              className='translate-z-0 w-full h-full mix-blend-normal '
            />
            </div>  
);
};

export default Avatar;