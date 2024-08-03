import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaCar } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import img2 from '../../changeimg/innovacrysta.webp'
import img3 from '../../changeimg/i10.webp'
import img4 from '../../changeimg/swift.webp'
import img5 from '../../changeimg/creta.webp'
const ImageChange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    img2, img3, img4, img5
  ];
  const imgalt = [
    "self drive car rental Innova","cars for rent polo","car rentals near me swift","rent a car for self drive i20"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-28 xl:mt-0 2xl:mt-0 lg:mt-0'>
        <div className='h-full md:justify-between xs:justify-normal xs:flex-col-reverse md:flex-row flex flex-wrap justify-between bg-white'>
          <div className={`triangleElement xl:w-[660px] xs:pt-16 lg:pt-16 lg:w-[460px] lg:h-[500px] h-[300px] w-[300px]`}>
          <Image priority src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} height={600} width={600} />
          </div>
          <div className='lg:w-6/12 md:w-2/4 xl:pt-20 xs:pt-20 xs:pl-16 md:pl-0'>
            <h2 className="lg:text-left text-black font-[500] xl:text-base text-xl font-jakarta " data-wow-delay="50ms" data-wow-duration="200ms">
              <p className='xl:text-5xl lg:text-4xl xs:text-2xl lg:pb-2 font-bold pb-1'>Self Drive Car Rental </p>
              <p className='xl:text-5xl lg:text-4xl xs:text-2xl font-bold'>Starting at <span className='pl-2 text-blue-500'>₹ 77/hr</span></p>
              <div className='flex xs:flex-wrap xl:pt-16 lg:gap-8 pt-8 gap-2 lg:w-full xs:text-xs md:text-sm xl:text-xl'>
                <div className=" flex items-center gap-1 p-2 bg-[#ffffff] border-[2px] shadow-sm border-[#ffde32] rounded-md">
                  <RiMoneyRupeeCircleFill className="bg-[#ffde32] text-white rounded-md p-1 xs:size-9" size={40} />
                  <p className=" ">Zero Deposit</p>
                </div>
                <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[2px] shadow-sm border-[#ffde32]  rounded-md">
                  <SlSpeedometer className="bg-[#ffde32] text-white rounded-md p-1 xs:size-9" size={40} />
                  <p className=" lg: ">Unlimited Kilometers</p>
                </div>
                <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[2px] shadow-sm border-[#ffde32]  rounded-md">
                  <FaCar className="bg-[#ffde32] text-white rounded-md p-1 xs:size-9" size={40} />
                  <p className=" ">Check Original Car Photo</p>
                </div>
              
              
              </div>
            </h2>
          </div>

        </div>
      </div>
  );
};

export default ImageChange;
