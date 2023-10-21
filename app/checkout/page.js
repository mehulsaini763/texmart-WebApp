"use client";
import React, { useEffect, useState } from "react";
import Subtotal from "./components/Subtotal";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import useScreenSize from "../customHook/useScreenSize";

const page = () => {
  useEffect(() => {
    getCart();
  }, []);

  const screenSize = useScreenSize();
  const [cart, setCart] = useState([]);
  const [a, setAddress] = useState([]);
  const [prof, setProf] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCart = async () => {
    const docRef = doc(db, "users", "mehul");
    const docSnap = await getDoc(docRef);
    const profile = docSnap.data();
    setAddress(profile.addresses[0]);
    setProf(profile.profile);
    setCart(profile.cart);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="grid place-content-center text-center h-full">
        <h1 className="text-white text-6xl">Loading...</h1>;
      </div>
    );
  }
  if (screenSize.width >= 1024) {
    return (
      <div className="text-white h-full mx-auto max-w-6xl flex gap-4 p-4">
        <div className="w-2/3 space-y-4">
          <div className="flex gap-4">
            <div className="bg-neutral-900 p-4 rounded-md">
              <p className="pb-2 text-lg font-bold">Shipping Address</p>
              <div>{a.type}</div>
              <div>
                {`${a.address}, ${a.address2}, ${a.landmark}, ${a.city}, ${a.state} - ${a.pincode}`.toUpperCase()}
              </div>
              <div>Mobile: {a.phoneNo}</div>
            </div>
            <div className="bg-neutral-900 p-4 rounded-md">
              <p className="pb-2 text-lg font-bold">Billing Address</p>
              <div>{a.type}</div>
              <div>
                {`${a.address}, ${a.address2}, ${a.landmark}, ${a.city}, ${a.state} - ${a.pincode}`.toUpperCase()}
              </div>
              <div>Mobile: {a.phoneNo}</div>
            </div>
          </div>
          <div className="bg-neutral-900 p-4 rounded-md space-y-4">
            <p>Contact Information</p>
            <div className="flex gap-8">
              <p className="font-thin">Email: {prof.email}</p>
              <hr className="border border-neutral-800 my-2" />
              <p className="font-thin">Mobile: {prof.phoneNo}</p>
            </div>
          </div>
          <div className="bg-neutral-900 p-4 rounded-md">
            {cart.map((p) => (
              <div>
                <p className="text-lg font-bold">Available to Deliver @</p>
                <div className="flex items-center">
                  <div>{`${a.address}, ${a.address2}, ${a.landmark}, ${a.city}, ${a.state} - ${a.pincode}`}</div>
                  <div>
                    <img
                      className="object-contain w-44"
                      src={p.thumbnail}
                      alt=""
                    />
                  </div>
                  <div>{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <Subtotal cart={cart} />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="text-white space-y-2 p-2">
          <div className="bg-neutral-900 py-2 px-4 text-sm rounded-md space-y-2">
            <p className="font-bold">Shipping Address</p>
            <div className="text-xs">{a.type}</div>
            <div className="text-xs">
              {`${a.address}, ${a.address2}, ${a.landmark}, ${a.city}, ${a.state} - ${a.pincode}`.toUpperCase()}
            </div>
            <div className="text-xs">Mobile: {a.phoneNo}</div>
          </div>
          <div className="bg-neutral-900 py-2 px-4 rounded-md space-y-2">
            <p className="text-sm font-bold">Billing Address</p>
            <div className="text-xs">{a.type}</div>
            <div className="text-xs">
              {`${a.address}, ${a.address2}, ${a.landmark}, ${a.city}, ${a.state} - ${a.pincode}`.toUpperCase()}
            </div>
            <div className="text-xs">Mobile: {a.phoneNo}</div>
          </div>
          <div className="text-white bg-neutral-900 py-4 px-2 rounded-md space-y-2">
            <p className="text-sm">Contact Information</p>
            <div className="flex gap-8 text-xs">
              <p className="font-thin">Email: {prof.email}</p>
              <hr className="border border-neutral-800 my-2" />
              <p className="font-thin">Mobile: {prof.phoneNo}</p>
            </div>
          </div>
          <div className="bg-neutral-900 py-2 px-4 rounded-md text-xs">
            {cart.map((p) => (
              <div>
                <p className="font-bold">Available for Delivery</p>
                <br />
                <div className="flex items-center">
                  <div>
                    <img
                      className="object-contain w-28"
                      src={p.thumbnail}
                      alt=""
                    />
                  </div>
                  <div>{p.title}</div>
                </div>
              </div>
            ))}
          </div>
          <Subtotal cart={cart} />
        </div>
      </>
    );
  }
};

export default page;
