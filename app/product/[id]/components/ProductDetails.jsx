import LocationButton from "@/app/components/LocationButton";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="flex flex-col gap-2 text-white">
      <div>
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <div className="flex items-center">
          <p className="text-yellow-300">{product.rating}</p>
          <StarIcon className="text-yellow-300 w-4 h-4" />
        </div>
        <div>
          <p className="text-xl font-semibold">₹{product.price}.00</p>
          <p className="text-xs">{`(Incl. all Taxes)`}</p>
          <hr className="my-2" />
          <div className="flex gap-2">
            <p className="text-neutral-500 line-through">
              MRP:₹
              {Math.round(
                (product.price * (100 / product.discount)) /
                  (100 / product.discount - 1)
              )}
            </p>
            <p>{`(Save ₹${
              Math.round(
                (product.price * (100 / product.discount)) /
                  (100 / product.discount - 1)
              ) - product.price
            },${product.discount}% off)`}</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-700 rounded-md p-2 border">
        <LocationButton text={"Will be Deliverd Tommorrow @"} />
      </div>
      <div className="bg-neutral-900 rounded-md p-2">
        <h2 className="font-semibold px-2 pb-2">Key Features</h2>
        <ul className="list-disc pl-6">
          {product.keyfeatures.map((kf) => (
            <li className="text-sm">{kf}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
