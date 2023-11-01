import { useRouter } from "next/navigation";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import HalfStar from "../assets/halfstar.png";
import AddToWishlist from "./AddToWishlist";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleChange = () => {
    router.push(`/viewproduct/${product.id}`);
  };

  const previousPrice = () => {
    var y =
      (Math.round(product.discount) * product.price) /
      (100 - Math.round(product.discount));
    return Math.round(y);
  };

  return (
    <div className="relative p-2 w-36 space-y-1 lg:p-4 lg:w-56 bg-neutral-950 rounded-md shrink-0 lg:space-y-2">
      <AddToWishlist product={product} />
      <img
        className="object-contain p-2 hover:cursor-pointer"
        src={product.thumbnail}
        alt={product.title}
        onClick={handleChange}
      />
      <h1
        className="text-white text-xs lg:text-lg font-semibold line-clamp-2 hover:cursor-pointer hover:text-yellow-300"
        onClick={handleChange}
      >
        {product.title}
      </h1>
      <div>
        <p className="text-white text-sm lg:text-lg font-semibold">
          ₹{product.price}
          <sup className="text-neutral-700 text-decoration-line: line-through">
            ₹{previousPrice()}
          </sup>
        </p>
        <p className="flex">
          {[...Array(Math.floor(product.rating))].map((e, i) => {
            return <StarIcon key={i} className="text-yellow-300 h-4 w-4" />;
          })}
          {product.rating % 10 != 0 ? (
            <>
              <img src={HalfStar.src} className="w-4 h-4" />
              {[...Array(5 - (Math.floor(product.rating) + 1))].map((e, i) => {
                return (
                  <StarIcon key={i} className="text-neutral-800 h-4 w-4" />
                );
              })}
            </>
          ) : (
            <>
              {[...Array(5 - product.rating)].map((e, i) => {
                return (
                  <StarIcon key={i} className="text-neutral-800 h-4 w-4" />
                );
              })}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
