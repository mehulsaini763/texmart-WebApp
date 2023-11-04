import Link from "next/link";
import React from "react";

const Grid = (props) => {
  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden bg-neutral-900 text-white p-2">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <div className="grid grid-cols-4 py-4 gap-4">
          <div className="col-span-4">
            <Link href={"/products/s&Macbook"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698839498/Croma%20Assets/CMS/New%20at%20croma/01-11-2023/HP_BigTile_NewAtCroma_macbook_1nov2023_ozpcg8.png?tr=w-720"
                alt=""
              />
            </Link>
          </div>

          <div className="col-span-2">
            <Link href={"/products/s&Crossloop"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698853129/Croma%20Assets/CMS/New%20at%20croma/crossloops/HP_4Split_NewAtCroma_Crossloop_27Oct2023_sruivn.png?tr=w-480"
                alt=""
              />
            </Link>
          </div>
          <div className="col-span-2">
            <Link href={"/viewproduct/aad9e5f4-acd3-4362-b6e4-15445b54e979"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698815820/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Nov%202023/HP_4Split_NewAtCroma_lenovo_1nov2023_fhrbmk.png?tr=w-480"
                alt=""
              />
            </Link>
          </div>
          <div className="col-span-4">
            <Link href={"/viewproduct/81c08e3d-4d10-4ac9-ac2d-80b5ebbfa1d2"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698815824/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Nov%202023/HP_BigTile_NewAtCroma_oneplus_1nov2023_uaiokg.png?tr=w-720"
                alt=""
              />
            </Link>
          </div>
          <div className="col-span-2">
            <Link href={"/viewproduct/7f6616e6-0dd2-49f4-b74a-120b3ccf1726"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697780579/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/20-10-2023/HP_4Split_NewAtCroma_GoPro_20Oct2023_kpqfmg.png?tr=w-480"
                alt=""
              />
            </Link>
          </div>
          <div className="col-span-2">
            <Link href={"/products/s&croma"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698300353/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/26-10-2023/HP_4Split_NewAtCroma_CromaTV_26Oct2023_r5nn4n.png?tr=w-480"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block bg-neutral-900 rounded-md text-white p-4">
        <h1 className="text-2xl font-semibold">{props.title}</h1>
        <div className="grid grid-cols-4 py-4 gap-4">
          <div className="col-span-2">
            <Link href={"/products/s&Macbook"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698839498/Croma%20Assets/CMS/New%20at%20croma/01-11-2023/HP_BigTile_NewAtCroma_macbook_1nov2023_ozpcg8.png?tr=w-720"
                alt=""
              />
            </Link>
          </div>
          <div className="col-span-2">
            <Link href={"/viewproduct/81c08e3d-4d10-4ac9-ac2d-80b5ebbfa1d2"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697780600/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/20-10-2023/HP_BigTile_NewAtCroma_oneplus_20oct2023_m6it9n.png?tr=w-720"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link href={"/products/s&Crossloop"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698853129/Croma%20Assets/CMS/New%20at%20croma/crossloops/HP_4Split_NewAtCroma_Crossloop_27Oct2023_sruivn.png?tr=w-480"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link href={"/viewproduct/aad9e5f4-acd3-4362-b6e4-15445b54e979"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698815820/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Nov%202023/HP_4Split_NewAtCroma_lenovo_1nov2023_fhrbmk.png?tr=w-480"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link href={"/viewproduct/7f6616e6-0dd2-49f4-b74a-120b3ccf1726"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697780579/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/20-10-2023/HP_4Split_NewAtCroma_GoPro_20Oct2023_kpqfmg.png?tr=w-480"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link href={"/products/s&croma"}>
              <img
                className="rounded-md hover:cursor-pointer"
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698300353/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/26-10-2023/HP_4Split_NewAtCroma_CromaTV_26Oct2023_r5nn4n.png?tr=w-480"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
