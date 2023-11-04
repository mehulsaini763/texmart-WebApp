"use client";
import Loading from "@/app/components/Loading";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const profile = useSelector((state) => state.profile.data);

  useEffect(() => {
    if (profile == null) {
      router.push("/home");
    }
  }, []);

  if (useSelector((state) => state.products.data) == null) return <Loading />;

  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-4 p-4 text-white">
      <div className="flex gap-8 text-2xl items-center justify-between lg:justify-normal">
        <p>My Addresses</p>
        <button className="text-yellow-300 font-bold text-lg">
          + Add Address
        </button>
      </div>
      <div className="flex items-center">
        {profile.addresses.length == 0
          ? "No Addresses"
          : profile.addresses.map((a, i) => {
              return (
                <div className="bg-neutral-900 rounded-md p-4 space-y-4 text-base max-w-sm">
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
                  <div className="flex justify-between items-center mx-16 gap-4">
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
