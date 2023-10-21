"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { v4 } from "uuid";
import { StarIcon } from "@heroicons/react/24/solid";
import HalfStar from "../../public/halfstar.png";
import AddToWishlist from "./AddToWishlist";
import useScreenSize from "../customHook/useScreenSize";

const ProductCard = ({ product }) => {
  const screenSize = useScreenSize();
  const router = useRouter();

  const handleChange = () => {
    router.push(`/product/${product.id}`);
  };

  const previousPrice = () => {
    var y =
      (Math.round(product.discount) * product.price) /
      (100 - Math.round(product.discount));
    return Math.round(y);
  };
  if (screenSize.width >= 1024) {
    return (
      <div className="flex shrink-0 p-4 w-56 bg-neutral-950 flex-col min-w-[7rem] rounded-md overflow-clip">
        <div className="relative">
          <AddToWishlist product={product} />
          <img
            className="object-conatin h-38 p-2 hover:cursor-pointer"
            src={product.thumbnail}
            alt={product.title}
            onClick={handleChange}
          />
        </div>
        <h1
          className="text-white text-lg font-semibold line-clamp-2 hover:cursor-pointer hover:text-yellow-300"
          onClick={handleChange}
        >
          {product.title}
        </h1>
        <div>
          <p className="text-white text-lg font-semibold">
            ₹{product.price}
            <sup className="text-neutral-700 text-decoration-line: line-through">
              ₹{previousPrice()}
            </sup>
          </p>
          <p className="flex">
            {[...Array(Math.floor(product.rating))].map(() => {
              return (
                <StarIcon key={v4()} className="text-yellow-300 h-4 w-4" />
              );
            })}
            {product.rating % 10 != 0 ? (
              <>
                <img src={HalfStar.src} className="w-4 h-4" />
                {[...Array(5 - (Math.floor(product.rating) + 1))].map(() => {
                  return (
                    <StarIcon key={v4()} className="text-neutral-800 h-4 w-4" />
                  );
                })}
              </>
            ) : (
              <>
                {[...Array(5 - product.rating)].map(() => {
                  return (
                    <StarIcon key={v4()} className="text-neutral-800 h-4 w-4" />
                  );
                })}
              </>
            )}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative p-2 bg-neutral-950 rounded-md">
        <AddToWishlist product={product} />
        <div className="w-36 p-2">
        <img
          className="object-contain"
          src={product.thumbnail}
          alt={product.title}
          onClick={handleChange}
        />
        </div>
        <h1
          className="text-white text-sm font-semibold line-clamp-2 hover:cursor-pointer hover:text-yellow-300"
          onClick={handleChange}
        >
          {product.title}
        </h1>
        <div>
          <p className="text-white font-semibold">
            ₹{product.price}
            <sup className="text-neutral-700 text-decoration-line: line-through">
              ₹{previousPrice()}
            </sup>
          </p>
          <p className="flex">
            {[...Array(Math.floor(product.rating))].map(() => {
              return (
                <StarIcon key={v4()} className="text-yellow-300 h-4 w-4" />
              );
            })}
            {product.rating % 10 != 0 ? (
              <>
                <img src={HalfStar.src} className="w-4 h-4" />
                {[...Array(5 - (Math.floor(product.rating) + 1))].map(() => {
                  return (
                    <StarIcon key={v4()} className="text-neutral-800 h-4 w-4" />
                  );
                })}
              </>
            ) : (
              <>
                {[...Array(5 - product.rating)].map(() => {
                  return (
                    <StarIcon key={v4()} className="text-neutral-800 h-4 w-4" />
                  );
                })}
              </>
            )}
          </p>
        </div>
      </div>
    );
  }
};

export default ProductCard;
