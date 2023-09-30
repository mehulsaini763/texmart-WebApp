'use client'
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  
  const handleCart = () =>{
    router.push(`/viewcart/user/mehul`)  
  }


  return (
    <>
      <div className="flex gap-12 bg-neutral-950 p-2 text-white px-24 items-center">
        {/* <img className="hover:cursor-pointer" src="" alt="logo" onClick={()=>router.push("/")}/> */}
        <p className=" text-4xl font-bold">texmart</p>
        <div className="flex grow rounded-sm border-neutral-300 ">
          <span className="p-2 bg-neutral-200 text-black">O~</span>
          <input className="w-full bg-neutral-200" type="text" placeholder="Search"/>
        </div>
        <button>login</button>
        <button onClick={handleCart}>cart</button>
      </div>
    </>
  );
};

export default Navbar;
