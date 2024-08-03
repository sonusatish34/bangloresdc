"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo2 from '../../images/bangalore.webp';
import { LuPhoneCall } from 'react-icons/lu';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { TbPointFilled } from "react-icons/tb";
import Marquee from 'react-fast-marquee';
import { SiLinkedin } from "react-icons/si";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='fixed lg:relative top-0 left-0 right-0 z-50 bg-white text-black shadow-md'>
      <div className='flex justify-between items-center lg:px-14'>
        <Marquee speed={75}>
          <div className={'flex p-1 text-xs gap-24 lg:text-lg '}>
            <p className='flex items-center gap-1 justify-center pl-6'><TbPointFilled /><span>Zero Deposit</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Unlimited Kilometers</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Neatly Washed Car</span></p>
            {/* <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Choose your Favourite Color Car</span></p> */}
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Check Original Car Photos & Book</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Choose Your Own Hours 36hr, 50hr</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Car Starts 62rs/hr, min 24hrs</span></p>
            <p className='flex items-center gap-1 justify-center lg:pr-20'><TbPointFilled /><span>Any Problem 24/7 Service</span></p>
          </div>
        </Marquee>
        <div className='border-l-2 border-l-black'>
          <div className='flex justify-end lg:gap-5 xs:gap-3 px-2'>
            <Link href={'https://www.facebook.com/selfdrivecarsbylongdrivecars/'} target='_blank'>
              <p className='hover:text-blue-500 cursor-pointer'><FaFacebook className='lg:size-6'/></p>
            </Link>
            <Link href={'https://www.instagram.com/longdrivecars_bangalore/?hl=en'} target='_blank'>
              <p className='hover:text-blue-500 cursor-pointer'><FaInstagram className='lg:size-6' /></p>
            </Link>
            <Link href={'https://in.linkedin.com/company/long-drive-cars'} target='_blank'>
              <p className='hover:text-blue-500 cursor-pointer'><SiLinkedin className='lg:size-6'/></p>
            </Link>
            <Link href={'https://www.youtube.com/@longdrivecars_official'} target='_blank'>
              <p className='hover:text-blue-500 cursor-pointer'><FaYoutube className='lg:size-6'/></p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-800 justify-between text-white text-base py-2 px-3 lg:px-14">
        <h2 className='lg:text-2xl lg:font-bold'>For Booking Help</h2>
        <div className="flex items-center gap-1">
          <LuPhoneCall size={20} />
          <h2 className='lg:text-2xl lg:font-bold'>
            <Link href="tel:9986666395" target='_blank'>9986-666-395</Link>
          </h2>
        </div>
      </div>
      <div className="flex w-full lg:justify-between items-center z-50 fixed lg:relative bg-white lg:py-14 lg:pr-14 border-8 border-[#f5f3a4] lg:h-20">
        <div className="flex ">
          <Link href={'/'}>
            <div className='rounded-md flex cursor-pointer items-center lg:pl-10 pl-2'>
              <Image
                className="w-16 lg:w-40 lg:h-40"
                src={logo2}
                alt="carrr"
                width={400}
                height={400}
                priority
                // placeholder="blur"
              />
              <div className='w-40 text-black 2xl:w-full lg:w-96 lg:mt-2 pl-2'>
                <h2 className='font-semibold xl:text-xl lg:text-xl text-xs'>Self Drive Cars <span className='text-[#ffde32]'>Bangalore</span></h2>
                <p className='xs:text-xs lg:text-lg pl-6'>
                  <span className='xs:text-[7px] lg:text-[10px]'>Powered By</span>
                  <span className='lg:text-[17px] font-bold text-blue-700 text-[10px] xs:text-[8px] pl-1'>LONG DRIVE CARS</span>
                </p>
              </div>

            </div>
          </Link>
        </div>
        <div className={`${isOpen ? "hidden" : 'block'} hidden lg:block 2xl:pr-40`}>
          <ul className='font-semibold text-lg flex gap-8'>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Home</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Blog</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>About Us</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Contact Us</Link></li>
          </ul>
        </div>
        <div className='lg:hidden block'>
          <button
            ref={buttonRef}
            className="fixed top-[5.8rem] right-5 z-40 text-[#ffde32]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 fill-current text-[#ffde32]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
        <nav
          ref={menuRef}
          className={`${isOpen ? 'block overflow-auto' : 'hidden'} w-11/12 h-fit absolute top-[4rem] bg-yellow-50 rounded-md p-2 pt-6 lg:pr-16 right-0 z-50 transition-transform delay-2000 ease-out text-black`}
          style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}
        >
          <Link href={'/'}>
            <div className='pl-3 flex cursor-pointer items-center'>
              <Image
                className="w-24 lg:w-40 lg:h-40"
                src={logo2}
                alt="carrr"
                width={400}
                height={400}
                priority
                // placeholder="blur"
              />
              <div className='w-48 text-black 2xl:w-full lg:w-96 lg:mt-2'>
                <p className='font-semibold xl:text-xl lg:text-xl text-xs'>Self Drive Cars <span className='text-[#ffde32]'>Bangalore</span></p>
                <p className='xs:text-xs lg:text-lg flex lg:pl-10 xs:pl-9'>
                  <span className='xs:text-[7px] lg:text-[10px]'>Powered By</span>
                  <span className='lg:text-[17px] font-bold text-blue-700 text-[10px] xs:text-[8px] pl-1'>LONG DRIVE CARS</span>
                </p>
              </div>
            </div>
          </Link>
          <ul className="pl-6 pt-1 pb-1 border-t-2 border-gray-200 font-semibold flex flex-col gap-2 items-start text-black">
            <li className="w-32 text-start"><Link href={'/'}>Home</Link></li>
            <li className="w-32 text-start"><Link href={''}>Contact</Link></li>
            <li className="w-32 text-start"><Link href={''}>Blog</Link></li>
            <li className="w-32 text-start"><Link href={''}>Reviews</Link></li>
          </ul>
          <div className="flex flex-col border-t-2 text-[#ffde32] border-gray-200 text-left gap-2 pl-6 pt-4 justify-center">
            <p>For Booking Help Call</p>
            <div className="flex items-center">
              <ul>
                <li>Telangana, AP</li>
                <li className="font-bold text-2xl text-black">
                  <Link href="tel:9986666395" target='_blank'>9986-666-395</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <ul>
                <li>Bangalore</li>
                <li className="font-bold text-2xl text-black">912-912-25-25</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
