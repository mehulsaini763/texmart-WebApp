import React, { useState } from "react";
import Category from "./Category";
import ButtonRight from "./ButtonRight";
import ButtonLeft from "./ButtonLeft";

const Categories = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr(curr == 0 ? 0 : curr - 1);
  };

  const next = () => {
    setCurr(curr == 1 ? 1 : curr + 1);
  };

  const categories = [
    {
      name: "Smartphones",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png?tr=w-480",
    },
    {
      name: "Television",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_TV_21Feb2023_repyuk.png?tr=w-480",
    },
    {
      name: "Laptop",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/laptop_categoryicons_nixzuv.png?tr=w-480",
    },
    {
      name: "Headphones & Earphones",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_H_E_21Feb2023_cw375r.png?tr=w-480",
    },
    {
      name: "Refridgerators",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Ref_21Feb2023_ztynzt.png?tr=w-480",
    },
    {
      name: "Home Theaters & soundbars",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_HT_SB_21Feb2023_rk8ohd.png?tr=w-480",
    },
    {
      name: "Air Conditioners",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_AC_21Feb2023_azyacw.png?tr=w-480",
    },
    {
      name: "Washing Machines",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/washingmachine_categoryicons_ktcdeu.png?tr=w-480",
    },
    {
      name: "Tablets",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/tablet_categoryicons_d9a5ru.png?tr=w-480",
    },
    {
      name: "Cameras",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690521345/Croma%20Assets/CMS/Category%20icon/CategoryNavigation_AudioSplit_Cameras_21Feb2023_fxbmtt.png?tr=w-480",
    },
    {
      name: "Wearables",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/wearable_categoryicons_sl3n0l.png?tr=w-480",
    },
  ];

  return (
    <>
      {/* MOBILE */}
      <div className="mx-auto grid grid-cols-4 gap-4 px-2 py-4 lg:hidden">
        {categories.map((o, i) => {
          if (i < 8) {
            return <Category key={o.src} url={o.src} category={o.name} />;
          }
        })}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex bg-neutral-900 rounded-md items-center">
        <button className="h-28" onClick={prev}>
          <ButtonLeft />
        </button>
        <div className="overflow-hidden px-2">
          <div
            className="flex m-2 gap-4 transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 38}%)` }}
          >
            {categories.map((o) => {
              return <Category key={o.src} url={o.src} category={o.name} />;
            })}
          </div>
        </div>
        <button className="h-28" onClick={next}>
          <ButtonRight />
        </button>
      </div>
    </>
  );
};

export default Categories;
