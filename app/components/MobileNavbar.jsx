"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import User from "./User";
import Menu from "./Menu";
import { auth } from "../firebase";
import FullLogin from "./FullLogin";

const MobileNavbar = () => {
  const router = useRouter();
  const [showUser, setShowUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCart = () => {
    if (auth.currentUser != null) {
      router.push(`/viewcart/user/${auth.currentUser.uid}`);
    } else setShowLogin(true);
  };

  const handleSearch = (e) => {
    if (e.key == "Enter") {
      router.push(`/products/s&${e.target.value}`);
    }
  };
  return (
    <>
      <div className="lg:hidden bg-neutral-950 p-2">
        <div className="flex items-center gap-2">
          <Menu />
          <button
            className="text-2xl font-bold text-white mb-2 text-start"
            onClick={() => router.push("/")}
          >
            texmart
          </button>
          <div className="w-full"></div>
          <div className="flex gap-4">
            <div
              className="w-6 h-6"
              onClick={() => {
                auth.currentUser == null
                  ? setShowLogin(true)
                  : setShowUser(true);
              }}
            >
              <UserIcon className="text-white w-6 h-6" />
            </div>
            {showUser && <User setShowUser={setShowUser}/>}
            <button onClick={handleCart}>
              <ShoppingCartIcon className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex items-center grow rounded-md bg-white">
          <MagnifyingGlassIcon className="w-4 h-4 m-2" />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="What are you looking for?"
            onKeyDown={(e) => handleSearch(e)}
          />
        </div>
      </div>
      {showLogin && <FullLogin setShowLogin={setShowLogin} />}
    </>
  );
};

export default MobileNavbar;
