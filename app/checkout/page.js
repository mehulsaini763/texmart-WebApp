"use client";
import React, { useEffect } from "react";
import Subtotal from "./components/Subtotal";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../store/profileSlice";
import Loading from "../components/Loading";

const page = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);

  useEffect(() => {
    if (profile == null) {
      dispatch(getProfile());
      console.log("DATA FETCHED");
    }
  }, []);

  if (useSelector((state) => state.profile.data) == null) return <Loading />;

  return (
    <div className="text-white h-full mx-auto max-w-6xl flex flex-col lg:flex-row gap-2 p-2 lg:gap-4 lg:p-4">
      <div className="lg:w-2/3 space-y-2 lg:space-y-4">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <div className="bg-neutral-900 p-4 rounded-md">
            <p className="pb-2 text-base lg:text-lg font-bold">Shipping Address</p>
            <div className="text-sm lg:text-lg">{profile.addresses[0].type}</div>
            <div className="text-sm lg:text-lg">
              {`${profile.addresses[0].address}, ${profile.addresses[0].address2}, ${profile.addresses[0].landmark}, ${profile.addresses[0].city}, ${profile.addresses[0].state} - ${profile.addresses[0].pincode}`.toUpperCase()}
            </div>
            <div>Mobile: {profile.addresses[0].phoneNo}</div>
          </div>
          <div className="bg-neutral-900 p-4 rounded-md">
            <p className="pb-2 text-base lg:text-lg font-bold">Billing Address</p>
            <div className="text-sm lg:text-lg">{profile.addresses[0].type}</div>
            <div className="text-sm lg:text-lg">
              {`${profile.addresses[0].address}, ${profile.addresses[0].address2}, ${profile.addresses[0].landmark}, ${profile.addresses[0].city}, ${profile.addresses[0].state} - ${profile.addresses[0].pincode}`.toUpperCase()}
            </div>
            <div>Mobile: {profile.addresses[0].phoneNo}</div>
          </div>
        </div>
        <div className="bg-neutral-900 p-4 rounded-md space-y-4">
          <p>Contact Information</p>
          <div className="flex gap-8">
            <p className="font-thin">Email: {profile.profile.email}</p>
            <hr className="border border-neutral-800 my-2" />
            <p className="font-thin">Mobile: {profile.profile.phoneNo}</p>
          </div>
        </div>
        <div className="bg-neutral-900 p-4 rounded-md">
          {profile.cart.map((p) => (
            <div>
              <p className="text-base lg:text-lg font-bold">Available to Deliver @</p>
              <div className="flex items-center">
                <div className="hidden lg:block">{`${profile.addresses[0].address}, ${profile.addresses[0].address2}, ${profile.addresses[0].landmark}, ${profile.addresses[0].city}, ${profile.addresses[0].state} - ${profile.addresses[0].pincode}`}</div>
                <div className=" shrink-0">
                  <img
                    className="object-contain p-4 lg:p-2 w-28"
                    src={p.thumbnail}
                    alt=""
                  />
                </div>
                <div className="line-clamp-2 px-2">{p.title}</div>
              </div>
              <hr className="border-1 border-neutral-700 my-2"/>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/3">
        <Subtotal cart={profile.cart} />
      </div>
    </div>
  );
};

export default page;
