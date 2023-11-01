import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ProductShowcase = () => {
  return (
    <div className="bg-neutral-900 p-8 text-white font-semibold rounded-md text-xl">
      <div className="flex justify-between">
        <p>Product Showdown</p>
        <ChevronDownIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default ProductShowcase;
