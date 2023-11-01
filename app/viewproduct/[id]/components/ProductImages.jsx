"use client";
import React, { useState } from "react";

const ProductImages = (props) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr(curr == 0 ? 0 : curr - 1);
  };

  const next = () => {
    setCurr(curr == 1 ? 1 : curr + 1);
  };
  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden overflow-hidden px-4">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 38}%)` }}
          >
            {props.images.map((u, i) => {
              if (i < 4) {
                return (
                  <img key={u} className="object-contain w-48 mx-16" src={u} />
                );
              }
            })}
          </div>
        </div>
        <div className="py-4">
        <div className="mx-auto flex items-center gap-1 w-fit">
        {props.images.map((u, i) => {
              if (i < 4) {
                return (
                 <div className={`${curr==i&&"bg-neutral-200 p-1"} w-2 h-2 rounded-full border border-neutral-700`}></div>
                );
              }
            })}
        </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex bg-neutral-900 rounded-md p-4 gap-4">
        <div id="column1" className="shrink-0">
          <div className="flex flex-col gap-2">
            {props.images.map((u, i) => {
              if (i < 3) {
                return (
                  <img
                    className={`p-2 object-contain w-28 h-28 rounded-md ${
                      u == imgUrl
                        ? "border-2 border-yellow-300"
                        : "border border-neutral-800"
                    }`}
                    src={u}
                    key={u}
                    onMouseOver={() => setImgUrl(u)}
                  />
                );
              }
            })}
          </div>
        </div>
        <div id="column2">
          <img
            className="object-contain h-full"
            src={imgUrl == null ? props.images[0] : imgUrl}
            alt="BIG IMAGE"
          />
        </div>
      </div>
    </>
  );
};

export default ProductImages;
