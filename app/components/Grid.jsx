import React from "react";
import useScreenSize from "../customHook/useScreenSize";

const Grid = (props) => {
  const screenSize = useScreenSize();
  if (screenSize.width >= 1024) {
    return (
      <div className="bg-neutral-900 rounded-md text-white p-4">
        <h1 className="text-2xl font-semibold">{props.title}</h1>
        <div className="grid grid-cols-4 py-4 gap-4">
          <div className="col-span-2">
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697569265/Croma%20Assets/CMS/Homepage%20Banners/New%20at%20croma/HP_BigTile_NewAtCroma_Samsung_16Octo2023_mmefmc.png?tr=w-720"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697780600/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/20-10-2023/HP_BigTile_NewAtCroma_oneplus_20oct2023_m6it9n.png?tr=w-720"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697780579/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/20-10-2023/HP_4Split_NewAtCroma_GoPro_20Oct2023_kpqfmg.png?tr=w-480"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697720556/Croma%20Assets/CMS/New%20at%20croma/HP_4Split_NewAtCroma_CromaTV_19Oct2023_h4fcuy.png?tr=w-480"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697544139/Croma%20Assets/CMS/New%20at%20croma/17-10-2023/Onida%20WM/HP_4Split_NewAtCroma_OnidaWM_17Oct2023_crlz0z.png?tr=w-480"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697698266/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/19-10-2023/HP_4Split_NewAtCroma_Jabra_19Oct2023_t8ay1d.png?tr=w-480"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-neutral-900 rounded-md text-white p-2">
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <div className="grid grid-cols-4 py-4 gap-4">
          <div className="col-span-2">
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697004219/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/11-10-2023/HP_BigTile_NewAtCroma_SE_11Octo2023_gkswha.png?tr=w-720"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697176670/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/13-10-2023/HP_BigTile_NewAtCroma_xiaomiTV_13oct2023_ipefov.png?tr=w-720"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697004219/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/11-10-2023/HP_4Split_NewAtCroma_Acer_11Oct2023_xljxau.png?tr=w-480"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697434647/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/16-10-2023/HP_4Split_NewAtCroma_Ref_16Oct2023_mqchoj.png?tr=w-480"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697434647/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/16-10-2023/HP_4Split_NewAtCroma_Blaupunkt_16oct2023_lheecb.png?tr=w-480"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md hover:cursor-pointer"
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696948432/Croma%20Assets/CMS/Homepage%20Banners/New%20at%20croma/Oct%202023/10-10-2023/HP_4Split_NewAtCroma_Fabiano_10Oct2023_iumnba.png?tr=w-480"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Grid;
