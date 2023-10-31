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
    <div className="mx-auto max-w-4xl flex flex-col gap-4 p-4 text-white">
      <p className="text-2xl">My Wishlist</p>
      <div className="flex flex-col bg-neutral-900 px-8 py-16 rounded-md">
        <div className="mx-auto">
          {profile.wishlist.length == 0
            ? "WISHLIST EMPTY"
            : profile.wishlist.map((p) => (
                <div key={p.id}>
                  <div className="flex">
                    <div>
                      <img className="w-48 object-contain" src={p.thumbnail} />
                    </div>
                    <div className="space-y-4">
                      <p className="text-xl font-bold">{p.title}</p>
                      <div className="flex justify-between">
                        <div className="space-y-4">
                          <p className=" text-2xl font-black">₹{p.price}</p>
                          <p className="px-2 py-1 text-base font-black border rounded-md">
                            {p.discount}% OFF
                          </p>
                          <p>Added On</p>
                        </div>
                        <div className="flex flex-col gap-4">
                          <button className="font-bold border rounded-md py-2 px-4">
                            Add to Cart
                          </button>
                          <button className="font-bold border rounded-md py-2 px-4">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="border border-neutral-800 my-4 px-4" />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default page;
