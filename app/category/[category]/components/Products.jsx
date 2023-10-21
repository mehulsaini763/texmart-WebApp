import React, { useState } from "react";
import AssuredLogo from "../../../../public/texmartAssured.png";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import useScreenSize from "@/app/customHook/useScreenSize";

const Products = ({ products }) => {
  const screenSize = useScreenSize();
  const router = useRouter();
  const goToProduct = (id) => {
    router.push(`/product/${id}`);
  };

  if (products == null) {
    return <p className="text-6xl">LOADING.....</p>;
  }
  if (screenSize.width >= 1024) {
    return (
      <>
        {products.map((p) => (
          <div key={v4()}>
            <div
              className="flex text-white m-8 gap-2 hover:cursor-pointer"
              onClick={() => goToProduct(p.id)}
            >
              <div className="w-2/6">
                <img className="object-contain" src={p.thumbnail} />
              </div>
              <div
                className="w-3/6 hover:cursor-pointer"
                onClick={() => goToProduct(p.id)}
              >
                <p className="text-xl line-clamp-2 hover:text-yellow-300">
                  {p.title}
                </p>
                <ul className="list-disc p-4">
                  {p.keyfeatures.map((kf, i) => {
                    if (i < 5) {
                      return (
                        <li key={v4()} className="text-base">
                          {kf}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
              <div
                className="w-1/6 flex flex-col gap-2 text-right hover:cursor-pointer"
                onClick={() => goToProduct(p.id)}
              >
                <p className="text-2xl">₹{p.price}</p>
                <p className="text-sm line-through text-neutral-500">
                  MRP:₹{p.price}
                </p>
                <p className="text-sm">{p.discount}% off</p>
                <div className="flex flex-row-reverse w-full">
                  <img
                    className="w-16 object-contain"
                    src={AssuredLogo.src}
                    alt="Assured"
                  />
                </div>
              </div>
            </div>
            <hr className="m-8 border-neutral-500 " />
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {products.map((p) => (
          <>
            <div
              className="text-white bg-neutral-900 py-4 px-2 gap-2 flex"
              key={p.title}
            >
              <div
                className="w-1/3 text-center flex items-center"
                onClick={() => goToProduct(p.id)}
              >
                <img className="object-contain" src={p.thumbnail} />
              </div>
              <div className="w-2/3">
                <p className="text-sm w-full" onClick={() => goToProduct(p.id)}>
                  {p.title}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg">₹{p.price}</p>
                  <img
                    className="w-12 object-contain"
                    src={AssuredLogo.src}
                    alt="Assured"
                  />
                </div>
                <p className="text-xs line-through text-neutral-500">
                  MRP:₹{p.price}
                </p>
                <p className="text-xs">{p.discount}% off</p>
              </div>
            </div>
            <hr className="brder border-neutral-800 " />
          </>
        ))}
      </>
    );
  }
};

export default Products;
