"use client";
import React, { useEffect } from "react";
import CartItem from "./components/CartItem";
import Subtotal from "./components/Subtotal";
import Loading from "@/app/components/Loading";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/app/store/profileSlice";
import Navbar from "@/app/components/Navbar";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);

  useEffect(() => {
    if (profile == null) {
      dispatch(getProfile());
      console.log("DATA FETCHED");
    }
  }, []);

  if (useSelector((state) => state.profile.data) == null) return <Loading />;

  if (profile.cart.length == 0) {
    return (
      <div className="grid place-content-center text-center h-full">
        <div className="text-white text-6xl">Cart is Empty</div>
      </div>
    );
  }

  return (
    <>
              <Navbar />

    <div className="text-white h-full mx-auto max-w-6xl flex flex-col gap-2 lg:flex-row lg:gap-4 lg:p-4">
      <div className="space-y-2 lg:w-2/3 lg:space-y-4 p-2">
        <div className="bg-neutral-900 rounded-md p-4 text-sm lg:text-base">
          <p>Deliver To: {profile.addresses[0].fullName}</p>
          <p>{`${profile.addresses[0].address}, ${profile.addresses[0].address2}, ${profile.addresses[0].landmark}, ${profile.addresses[0].city}, ${profile.addresses[0].state} - ${profile.addresses[0].pincode}`}</p>
        </div>
        <div className="bg-neutral-900 rounded-md p-4 lg:h-full">
          {profile.cart.map((p, i) => (
            <div key={p.id}>
              <CartItem index={i} profile={profile} product={p} />
              <hr className="lg:my-4 border-neutral-500" />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/3 space-y-4">
        <Subtotal cart={profile.cart} />
        <button
          className="bg-yellow-300 lg:rounded-md text-black font-bold text-center p-4 w-full"
          onClick={() => router.push("/checkout")}
        >
          Proceed to Buy
        </button>
      </div>
    </div>
</>
  );
};
export default page;
