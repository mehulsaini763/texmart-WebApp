import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Banner = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr(curr == 0 ? banners.length - 1 : curr - 1);
  };

  const next = () => {
    setCurr(curr == banners.length - 1 ? 0 : curr + 1);
  };

  const banners = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/84ae27f93c14a4e3.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d7b3930dbada2c4.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4e2affd1e5ed65be.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/05adcdf765d309fd.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20",
  ];

    return (
      <div className="relative overflow-hidden lg:rounded-md">
        <div className="absolute flex inset-0 items-center justify-between z-10">
          <button onClick={prev} className="hidden lg:block">
            <ChevronLeftIcon className="text-black w-8 h-8" />
          </button>
          <button onClick={next} className="hidden lg:block">
            <ChevronRightIcon className="text-black w-8 h-8" />
          </button>
        </div>
        <div
          className="flex transition-transform ease-out duration-300"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {banners.map((img) => {
            return <img key={img} src={img} />;
          })}
        </div>
      </div>
    );
  
      
    
};

export default Banner;
