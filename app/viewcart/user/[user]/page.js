"use client";
import React, { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import Subtotal from "./components/Subtotal";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import useScreenSize from "@/app/customHook/useScreenSize";

const page = ({ params }) => {
  useEffect(() => {
    getData();
  }, []);

  const router = useRouter();
  const screenSize = useScreenSize();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const docRef = doc(db, "users", params.user);
    const docSnap = await getDoc(docRef);
    setUserData(docSnap.data());
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="grid place-content-center text-center h-full">
        <h1 className="text-white text-6xl">Loading...</h1>;
      </div>
    );
  }
  if (userData.cart.length == 0) {
    return (
      <div className="grid place-content-center text-center h-full">
        <div className="text-white text-6xl">Cart is Empty</div>
      </div>
    );
  }
  if (screenSize.width >= 1024) {
    return (
      <div className="text-white h-full mx-auto max-w-6xl flex gap-4 p-4">
        <div className="w-2/3 space-y-4">
          <div className="bg-neutral-900 rounded-md p-4">
            <p>Deliver To: {userData.addresses[0].fullName}</p>
            <p>{`${userData.addresses[0].address}, ${userData.addresses[0].address2}, ${userData.addresses[0].landmark}, ${userData.addresses[0].city}, ${userData.addresses[0].state} - ${userData.addresses[0].pincode}`}</p>
          </div>
          <div className="bg-neutral-900 rounded-md p-4 h-full">
            {userData.cart.map((p) => (
              <>
                <CartItem key={v4()} product={p} getCart={getData} />
                <hr className="my-4 border-neutral-500" />
              </>
            ))}
          </div>
        </div>
        <div className="w-1/3 space-y-4">
          <Subtotal cart={userData.cart} />
          <button
            className="bg-yellow-300 rounded-md text-black font-bold text-center p-4 w-full"
            onClick={() => router.push("/checkout")}
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-white flex flex-col gap-2 p-2">
        <div className="bg-neutral-900 rounded-md p-2 text-sm">
          <p>Deliver To: {userData.addresses[0].fullName}</p>
          <p>{`${userData.addresses[0].address}, ${userData.addresses[0].address2}, ${userData.addresses[0].landmark}, ${userData.addresses[0].city}, ${userData.addresses[0].state} - ${userData.addresses[0].pincode}`}</p>
        </div>
        <div className="bg-neutral-900 rounded-md p-2 h-full">
          {userData.cart.map((p) => (
            <>
              <CartItem key={v4()} product={p} getCart={getData} />
              <hr className="my-2 border-neutral-500" />
            </>
          ))}
        </div>
        <Subtotal cart={userData.cart} />
      </div>
    );
  }
};

export default page;
