import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import img1 from '../../changeimg/citogfenh.png'
import img2 from '../../changeimg/innovacrysta.png'
import img3 from '../../changeimg/creta.png'
import img4 from '../../changeimg/swift.png'
import img5 from '../../changeimg/i10.png'
const ImageChange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    img2, img3, img4, img5
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-container lg:mt-24 lg:w-full h-[300px] pt-20 w-[300px]">
      {/* <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} /> */}
      <Image priority src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} height={600} width={600} />
      {/* <p className='text-black text-lg font-jakarta font-medium'>{prices[currentIndex]}</p> */}
    </div>
  );
};

export default ImageChange;
