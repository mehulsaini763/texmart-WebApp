"use client";
import React, { useRef, useState } from "react";

const ProductImages = (props) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [curr, setCurr] = useState(0);

  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);

  const imgRef = useRef();

  const prev = () => {
    setCurr(curr == 0 ? 0 : curr - 1);
  };

  const next = () => {
    setCurr(curr == 1 ? 1 : curr + 1);
  };

  return (
    <>
      <>
        {/* MOBILE */}
        <div className="lg:hidden overflow-hidden px-8">
          <div
            className="overflow-hidden"
            onTouchStart={(e) => {
              setDragStart(e.touches[0].clientX);
            }}
            onTouchMove={(e) => {
              setDragMove(
                dragCurrent + -(0.1 * (dragStart - e.touches[0].clientX))
              );
              setDragEnd(e.touches[0].clientX);
            }}
            onTouchEnd={() => {
              if (dragStart > dragEnd) {
                setDragCurrent(
                  dragCurrent - 100 < -(props.images.length * 100) + 100
                    ? 0
                    : dragCurrent - 100
                );
                setDragMove(
                  dragCurrent - 100 < -(props.images.length * 100) + 100
                    ? 0
                    : dragCurrent - 100
                );
                setCurr(curr + 1 > props.images.length - 1 ? 0 : curr + 1);
              } else {
                setDragCurrent(
                  dragCurrent + 100 > 0
                    ? -props.images.length * 100 + 100
                    : dragCurrent + 100
                );
                setDragMove(
                  dragCurrent + 100 > 0
                    ? -props.images.length * 100 + 100
                    : dragCurrent + 100
                );
                setCurr(curr - 1 < 0 ? props.images.length - 1 : curr - 1);
              }
            }}
          >
            <div
              ref={imgRef}
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(${dragMove}%)` }}
            >
              {props.images.map((u) => (
                <div className="shrink-0 w-full h-48">
                  <img key={u} className="object-contain w-full h-full" src={u} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:hidden py-4">
          <div className="mx-auto flex items-center gap-1 w-fit">
            {props.images.map((u, i) => (
              <div
                key={i}
                className={`${
                  curr == i && "bg-neutral-200 p-1"
                } w-2 h-2 rounded-full border border-neutral-700`}
              ></div>
            ))}
          </div>
        </div>
      </>

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
