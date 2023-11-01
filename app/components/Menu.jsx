import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Menu = () => {
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);

  return (
    <div onClick={() => setMenuState(!menuState)}>
      <Bars3Icon className="w-6 h-6 text-white" />
      {menuState && (
        <div
          className="absolute inset-0 z-50 "
          onClick={() => setMenuState(!menuState)}
        >
          <div className="h-full w-2/3 lg:my-16 lg:mx-64 text-white lg:h-max lg:w-max bg-neutral-900 shadow-[0px_0px_10px_0px_rgba(38,38,38,1)] rounded-md">
            <div className="flex items-center justify-between">
            <p className=" select-none text-lg font-bold  py-2 px-4">
              Shop by Category
            </p>
            <XMarkIcon className="lg:hidden w-6 h-6 m-2" onClick={()=>setMenuState(false)}/>
            </div>
            <p
              className="hover:bg-neutral-800 py-2 px-4"
              onClick={() =>
                router.push(`/products/car&television&accessories`)
              }
            >
              Televisions & Accessories
            </p>
            <p
              className="select-none hover:bg-neutral-800 py-2 px-4"
              onClick={() => router.push(`/products/car&home appliances`)}
            >
              Home Appliances
            </p>
            <p
              className="select-none hover:bg-neutral-800 py-2 px-4"
              onClick={() => router.push(`/products/car&phone&wearables`)}
            >
              Phones & Wearables
            </p>
            <p
              className="select-none hover:bg-neutral-800 py-2 px-4"
              onClick={() => router.push(`/products/car&laptops&tablets`)}
            >
              Laptops & Tablets
            </p>
            <p
              className="select-none hover:bg-neutral-800 py-2 px-4"
              onClick={() => router.push(`/products/car&audio&video`)}
            >
              Audio & video
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
