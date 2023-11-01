import {
  ArrowLeftOnRectangleIcon,
  BookOpenIcon,
  EnvelopeIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { XMarkIcon } from "@heroicons/react/24/solid";

const User = ({ setShowUser }) => {
  const router = useRouter();

  function signOutAuth() {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="absolute lg:right-0 inset-0 z-20 lg:py-6 flex flex-row-reverse">
      <div>
        <div className="flex bg-neutral-800 justify-between text-white text-xl p-4 items-center lg:hidden">
          <p>My Account</p>
          <XMarkIcon className="w-6 h-6" onClick={() => setShowUser(false)} />
        </div>
        <div className="bg-neutral-900 text-white h-full lg:h-max w-max lg:my-5 lg:rounded-md px-6 py-4 space-y-4">
          <div className="flex items-center gap-4">
            <span>
              <UserCircleIcon className="h-8 w-8" />
            </span>
            <div
              className="text-left"
              onClick={() => {
                router.push("/user/profile");
                setShowUser(false);
              }}
            >
              <p className="text-lg">My Profile</p>
              <p className="text-sm">Edit your basic details</p>
            </div>
          </div>
          <hr className="border border-neutral-500 mx-4" />
          <div className="flex items-center gap-4">
            <span>
              <BookOpenIcon className="h-8 w-8" />
            </span>
            <div
              className="text-left"
              onClick={() => {
                router.push("/user/addresses");
                setShowUser(false);
              }}
            >
              <p className="text-lg">My Address</p>
              <p className="text-sm">Manage your saved addresses</p>
            </div>
          </div>
          <hr className="border border-neutral-500 mx-4" />
          <div className="flex items-center gap-4">
            <span>
              <EnvelopeIcon className="h-8 w-8" />
            </span>
            <div
              className="text-left"
              onClick={() => {
                router.push("/user/orders");
                setShowUser(false);
              }}
            >
              <p className="text-lg">My Orders</p>
              <p className="text-sm">View,track,cancel orders & buy again</p>
            </div>
          </div>
          <hr className="border border-neutral-500 mx-4" />
          <div className="flex items-center gap-4">
            <span>
              <HeartIcon className="h-8 w-8" />
            </span>
            <div
              className="text-left"
              onClick={() => {
                router.push("/user/wishlist");
                setShowUser(false);
              }}
            >
              <p className="text-lg">My Wishlist</p>
              <p className="text-sm">Manage your saved addresses</p>
            </div>
          </div>
          <hr className="border border-neutral-500 mx-4" />
          <div className="flex items-center gap-4">
            <span>
              <ArrowLeftOnRectangleIcon className="h-8 w-8" />
            </span>
            <div className="text-left" onClick={signOutAuth}>
              <p className="text-lg">Sign Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
