import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Banner1 from "@/public/banner1.jpg";
import Banner2 from "@/public/banner2.jpg";
import Banner3 from "@/public/banner3.jpg";

const Banner = () => {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const autoplay = setTimeout(()=>next(), 5000);
    return ()=>clearTimeout(autoplay)
  }, [curr]);

  const prev = () => {
    setCurr(curr == 0 ? banners.length - 1 : curr - 1);
  };

  const next = () => {
    setCurr(curr == banners.length - 1 ? 0 : curr + 1);
  };

  const banners = [Banner1.src, Banner2.src, Banner3.src];

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
        className="flex transition-transform ease-out duration-300 h-40 lg:h-96"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {banners.map((img) => {
          return (
            <img className="object-fill shrink-0 w-full" key={img} src={img} />
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
