"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

const page = () => {
  useEffect(() => {
    getAddresses();
  }, []);

  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAddresses = async () => {
    const docRef = doc(db, "users", "test");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      windows.alert("CREATE ACCOUNT");
    } else {
      const profile = docSnap.data();
      setAddresses(profile.addresses);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="text-white text-center text-6xl">
        <div>LOADING...</div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-4 p-4 text-white">
      <div className="flex gap-8 text-2xl items-center">
        <p>My Addresses</p>
        <button className="text-yellow-300 font-bold text-lg">
          + Add Address
        </button>
      </div>
      <div className="flex items-center">
        {addresses.length == 0
          ? "No Addresses"
          : addresses.map((a, i) => {
              return (
                <div className="bg-neutral-900 rounded-md p-4 space-y-4 text-base max-w-xs">
                  <div className="text-yellow-300 flex justify-between items-center font-semibold">
                    <p>{a.type}</p>
                    {i == 0 && (
                      <p className="text-yellow-300 font-thin border border-yellow-300 rounded-md py-1 px-2 text-sm">
                        DEFAULT ADDRESS
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <p>{a.fullName}</p>
                    <hr className="border border-neutral-700 h-4" />
                    <p>{a.phoneNo}</p>
                  </div>
                  <div className="font-bold">{`${a.address}, ${a.address2}, ${a.landmark}, ${a.city}, ${a.state} - ${a.pincode}`}</div>
                  <div className="flex justify-between items-center mx-16">
                    <button className="rounded-md border border-neutral-700 px-4 py-2">DELETE</button>
                    <button className="rounded-md border border-neutral-700 px-4 py-2">UPDATE</button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default page;
