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

  if (useSelector((state) => state.profile.data) == null) return <Loading />;

  return (
    <div className="mx-auto max-w-4xl flex flex-col gap-4 p-2 lg:p-4 text-white">
      <p className="text-2xl">My Wishlist</p>
      <div className="flex flex-col bg-neutral-900 px-4 py-8 lg:px-8 lg:py-16 rounded-md">
        <div className="mx-auto">
          {profile.wishlist.length == 0
            ? "WISHLIST EMPTY"
            : profile.wishlist.map((p) => (
                <div key={p.id}>
                  <div className="flex">
                    <div className="shrink-0">
                      <img
                        className="w-28 lg:w-48 object-contain"
                        src={p.thumbnail}
                      />
                    </div>
                    <div className="space-y-2 lg:space-y-4 w-full px-4 lg:px-8">
                      <p className="text-base lg:text-xl font-bold line-clamp-2">
                        {p.title}
                      </p>
                      <div className="flex flex-col justify-between gap-2">
                        <div className="flex justify-between items-center">
                          <p className="text-lg lg:text-2xl font-black">
                            ₹{p.price}
                          </p>
                          <p className="px-2 py-1 text-xs lg:text-base font-black border rounded-md">
                            {p.discount}% OFF
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <button className="px-2 py-1 text-xs lg:text-base font-black border rounded-md">
                            Delete
                          </button>
                          <button className="px-2 py-1 text-xs lg:text-base font-black border rounded-md">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="border border-neutral-800 my-2 px-2 lg:my-4 lg:px-4" />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default page;
