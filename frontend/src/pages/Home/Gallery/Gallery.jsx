import React, { useState, useEffect } from 'react';
import image1 from '../../../assets/gallary/image1.png';
import image2 from '../../../assets/gallary/image2.png';
import SligoGaa from '../../../assets/gallary/SligoGaa.png';
import Rugby from '../../../assets/gallary/Rugby.png';
import DerryGaa from '../../../assets/gallary/DerryGaa.png';
import IrishFootball from '../../../assets/gallary/IrishFootball.png';
import LiamTrophy from '../../../assets/gallary/LiamTrophy.png';

const Gallary = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="md:w-[80%] mx-auto my-28">
      <div className="mb-16">
      <h1 className="text-5xl font-bold text-center text-secondary">
          Our <span className="text-black dark:text-white">Gallery</span>{" "}
          
        </h1>
      </div>
      <div className="md:grid grid-cols-2 items-center justify-center border gap-4">
        <div className="mb-4 md:mb-0">
          <img src={LiamTrophy} alt="" className="md:h-[720px] w-full mx-auto" />
        </div>
        <div className="gap-4 grid grid-cols-2 items-start">
          <div className="">
            <img src={SligoGaa} alt="" className="md:h-[350px]" />
          </div>
          <div>
            <img src={Rugby} alt="" className="md:h-[350px]" />
          </div>
          <div>
            <img src={DerryGaa} alt="" className="md:h-[350px]" />
          </div>
          <div>
            <img src={IrishFootball} alt="" className="md:h-[350px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
