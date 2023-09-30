"use client";
import React, { useState } from "react";

const ProductImages = (props) => {
  const [imgUrl, setImgUrl] = useState(null);
  return (
    <div className="flex bg-neutral-900 rounded-md p-4 gap-4">
      <div id="column1" className="shrink-0">
        <div className="flex flex-col gap-2">
          {props.images.map((i) => (
            <img
              className={`object-contain w-28 h-28 rounded-md ${i==imgUrl?"border-2 border-yellow-300":"border border-neutral-800"}`}
              src={i}
              onMouseOver={() => setImgUrl(i)}
            />
          ))}
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
  );
};

export default ProductImages;
