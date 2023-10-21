import React, { useEffect, useState } from "react";
import Category from "./Category";
import ButtonRight from "./ButtonRight";
import ButtonLeft from "./ButtonLeft";
import useScreenSize from "../customHook/useScreenSize";

const Categories = () => {
  const screenSize = useScreenSize();

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr(curr == 0 ? 0 : curr - 1);
  };

  const next = () => {
    setCurr(curr == 1 ? 1 : curr + 1);
  };

  const categories = [
    {
      name: "smartphones",
      alternative: ["mobile", "phone"],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png?tr=w-480",
    },
    {
      name: "television",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_TV_21Feb2023_repyuk.png?tr=w-480",
    },
    {
      name: "laptops",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/laptop_categoryicons_nixzuv.png?tr=w-480",
    },
    {
      name: "headphones & earphones",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_H_E_21Feb2023_cw375r.png?tr=w-480",
    },
    {
      name: "refrigerator",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Ref_21Feb2023_ztynzt.png?tr=w-480",
    },
    {
      name: "home theaters & soundbars",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_HT_SB_21Feb2023_rk8ohd.png?tr=w-480",
    },
    {
      name: "air conditioners",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_AC_21Feb2023_azyacw.png?tr=w-480",
    },
    {
      name: "",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/washingmachine_categoryicons_ktcdeu.png?tr=w-480",
    },
    {
      name: "",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/tablet_categoryicons_d9a5ru.png?tr=w-480",
    },
    {
      name: "",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_S_M_21Feb2023_qllhag.png?tr=w-480",
    },
    {
      name: "",
      alternative: [],
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/wearable_categoryicons_sl3n0l.png?tr=w-480",
    },
  ];

  if (screenSize.width >= 1024) {
    return (
      <div className="flex bg-neutral-900 rounded-md items-center">
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
    );
  } else {
    return (
      <div className="grid grid-cols-4 gap-2 bg-neutral-800 rounded-md items-center m-4">
        {categories.map((o, i) => {
          if (i < 8) {
            return <Category key={o.src} url={o.src} category={o.name} />;
          }
        })}
      </div>
    );
  }
};

export default Categories;
