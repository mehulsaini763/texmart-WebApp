import { Bars3Icon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Menu = () => {
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);

  return (
    <div
      onClick={() => setMenuState(!menuState)}
      onBlur={() => setMenuState(!menuState)}
    >
      <Bars3Icon className="w-6 h-6 text-white" />
      {menuState && (
        <div className="relative">
          <div className="absolute inset-x-0 text-white w-max bg-neutral-900 my-5 shadow-[0px_0px_10px_0px_rgba(38,38,38,1)] z-20 rounded-md">
            <p className=" select-none text-lg font-bold  py-2 px-4">
              Shop by Category
            </p>
            <p className="hover:bg-neutral-800 py-2 px-4" onClick={() => router.push(`/category/television&accessories`)}>
              Televisions & Accessories
            </p>
            <p
              className="select-none hover:bg-neutral-800 py-2 px-4"
              onClick={() => router.push(`/category/home appliances`)}
            >
              Home Appliances
            </p>
            <p
              className="select-none hover:bg-neutral-800 py-2 px-4"
              onClick={() => router.push(`/category/phone&wearables`)}
            >
              Phones & Wearables
            </p>
            <p
              className="select-none hover:bg-neutral-800 py-2 px-4"
              onClick={() => router.push(`/category/laptops&tablets`)}
            >
              Laptops & Tablets
            </p>
            <p
              className="select-none hover:bg-neutral-800 py-2 px-4"
              onClick={() => router.push(`/category/audio&video`)}
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
