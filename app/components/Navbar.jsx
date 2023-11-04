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
import MiniLogin from "./MiniLogin";
import FullLogin from "./FullLogin";
import LocationButton from "./LocationButton";

const Navbar = ({ navType, navVal }) => {
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
      router.push(`/products?type=search&query=${e.target.value}`);
    }
  };

  return (
    <>
      {/* MOBILE */}
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
              {showUser && <User setShowUser={setShowUser} />}
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
              spellCheck="false"
              value={navType == "search" ? navVal : undefined}
              placeholder="What are you looking for?"
              onKeyDown={(e) => {
                handleSearch(e);
                setTimeout(() => (e.target.event = undefined), 2000);
              }}
            />
          </div>
        </div>
        {showLogin && <FullLogin setShowLogin={setShowLogin} />}
      </>

      {/* DESKTOP */}
      <>
        <div className="hidden lg:block bg-neutral-950">
          <div className="mx-auto max-w-6xl flex items-center gap-8 py-2 px-4">
            <button
              className="text-4xl font-bold text-white mb-2"
              onClick={() => router.push("/home")}
            >
              texmart
            </button>
            <Menu />
            <div className="flex items-center grow rounded-md bg-white mx-8">
              <MagnifyingGlassIcon className="w-6 h-6 m-2" />
              <input
                className="w-full text-lg focus:outline-none"
                type="text"
                placeholder="What are you looking for?"
                onKeyDown={(e) => handleSearch(e)}
              />
            </div>
            <div className="flex gap-8">
              <LocationButton />
              <div
                className="relative w-6 h-6"
                onMouseOver={() => setShowUser(true)}
                onMouseOut={() => setShowUser(false)}
              >
                {auth.currentUser == null ? (
                  showUser ? (
                    <div>
                      <UserIcon className="text-white w-6 h-6" />
                      <MiniLogin
                        setShowUser={setShowUser}
                        setShowLogin={setShowLogin}
                      />
                    </div>
                  ) : (
                    <button>
                      <UserIcon className="text-white w-6 h-6" />
                    </button>
                  )
                ) : showUser ? (
                  <div>
                    <UserIcon className="text-yellow-300 w-6 h-6" />
                    <User setShowUser={setShowUser} />
                  </div>
                ) : (
                  <button>
                    <UserIcon className="text-white w-6 h-6" />
                  </button>
                )}
              </div>
              <button onClick={handleCart}>
                <ShoppingCartIcon className="text-white w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {showLogin && <FullLogin setShowLogin={setShowLogin} />}
      </>
    </>
  );
};

export default Navbar;
