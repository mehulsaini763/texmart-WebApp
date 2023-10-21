"use client";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import User from "./User";
import Menu from "./Menu";
import LocationButton from "./LocationButton";
import { auth } from "../firebase";
import MiniLogin from "./MiniLogin";
import FullLogin from "./FullLogin";

const Navbar = () => {
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
      router.push(`/search/${e.target.value}`);
    }
  };

  return (
    <>
      <div className="hidden lg:block bg-neutral-950">
        <div className="mx-auto max-w-6xl flex items-center gap-8 py-2 px-4">
          <button
            className="text-4xl font-bold text-white mb-2"
            onClick={() => router.push("/")}
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
                  <User />
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
  );
};

export default Navbar;
