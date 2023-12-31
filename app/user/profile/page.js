'use client'
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const handleProfile = ()=>{
    alert("Changes Saved")
  }
  return (
<>
<div className="flex text-white bg-neutral-950 p-2">
  <ArrowLeftIcon className="w-6 h-6" onClick={()=>router.back()} />
</div>

{/* MOBILE */}
<div className="flex mx-auto max-w-4xl lg:hidden flex-col gap-8 p-4 lg:p-16 text-black">
      <p className="text-2xl text-white">My Profile</p>
      <div className="flex gap-4 text-sm">
        <input className="w-full rounded-md px-4 py-2" type="text" placeholder="First Name"/>
        <input className="w-full rounded-md px-4 py-2" type="text" placeholder="Last Name"/>
      </div>
      <div className="grid grid-cols-2 px-4 text-sm items-center gap-8 text-white">
        <div className="flex gap-2">
          <label>Male</label>
          <input type="radio" name="gender" />
        </div>
        <div className="flex gap-2">
          <label>Female</label>
          <input type="radio" name="gender" />
        </div>
        <div className="flex gap-2">
          <label>Transgender</label>
          <input type="radio" name="gender" />
        </div>
        <div className="flex gap-2">
          <label>I'd rather not say</label>
          <input type="radio" name="gender" />
        </div>
      </div>
      <div className="flex gap-4 text-sm">
        <div className="flex bg-white items-center w-full rounded-md p-2 gap-2">
          <p >+91</p>
          <hr className="border h-full border-neutral-800"/>
          <input className="w-full" type="number" placeholder="Phone No" />
        </div>
        <input
          className="w-full rounded-md px-4 py-2"
          type="text"
          placeholder="email"
        />
      </div>
      <div className="w-full text-center">
        <button className="bg-yellow-300 text-sm font-bold w-fit py-2 px-4 rounded-md" onClick={handleProfile}>
          Save Changes
        </button>
      </div>
    </div>



{/* DESKTOP */}
<div className="hidden mx-auto max-w-4xl lg:flex flex-col gap-8 p-4 lg:p-16 text-black">
      <p className="text-2xl text-white">My Profile</p>
      <div className="flex gap-4">
        <input className="w-full rounded-md px-4 py-2" type="text" placeholder="First Name"/>
        <input className="w-full rounded-md px-4 py-2" type="text" placeholder="Last Name"/>
      </div>
      <div className="flex items-center gap-8 text-white">
        <div className="flex gap-2">
          <label>Male</label>
          <input type="radio" name="gender" />
        </div>
        <div className="flex gap-2">
          <label>Female</label>
          <input type="radio" name="gender" />
        </div>
        <div className="flex gap-2">
          <label>Transgender</label>
          <input type="radio" name="gender" />
        </div>
        <div className="flex gap-2">
          <label>I'd rather not say</label>
          <input type="radio" name="gender" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex bg-white items-center w-full rounded-md p-2 gap-2">
          <p >+91</p>
          <hr className="border h-full border-neutral-800"/>
          <input className="w-full" type="number" placeholder="Phone No" />
        </div>
        <input
          className="w-full rounded-md px-4 py-2"
          type="text"
          placeholder="email"
        />
      </div>
      <div className="w-full text-center">
        <button className="bg-yellow-300 text-lg font-bold w-fit py-2 px-4 rounded-md" onClick={handleProfile}>
          Save Changes
        </button>
      </div>
    </div>

</>  );
};

export default page;
