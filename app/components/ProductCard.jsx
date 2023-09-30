"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Star from "./Star";
import { v4 } from "uuid";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleChange = () => {
    router.push(`/product/${product.id}`);
  };

  const previousPrice = () => {
    var y =
      (Math.round(product.discountPercentage) * product.price) /
      (100 - Math.round(product.discountPercentage));
    var x = Math.round(product.price + y);
    return x;
  };

  return (
    <div
      className="flex flex-shrink-0 m-2 w-56 bg-neutral-950 flex-col min-w-[7rem] rounded-md overflow-clip"
      onClick={handleChange}
    >
      <div className="h-full">
        <img className="object-cover h-full" src={product.thumbnail} alt="" />
      </div>
      <div className="p-2 space-y-2">
        <h1 className="text-white text-lg font-semibold">{product.title}</h1>
        <div>
          <p className="text-white text-lg font-semibold">
            ${product.price}
            <sup className="text-gray-500 text-decoration-line: line-through">
              ${previousPrice()}
            </sup>
          </p>
          <div className="flex">
            {[...Array(5)].map(() => {
              const key = v4();
              return <Star key={key} />;
            })}
          </div>
        </div>
      </div>

      {/* <p className="text-green-500">
          {Math.round(product.discountPercentage)}% Off
        </p> */}
    </div>
  );
};

export default ProductCard;
