import React from "react";

const ProductDetails = ({product}) => {
  return (
    <div className="flex flex-col gap-1 text-white">
      <h1 className="text-xl font-semibold">{product.title}</h1>
      <div className="flex items-center gap-1">
        <p className="text-yellow-300">{product.rating}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fde047"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fde047"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      </div>
      <div>
        <p className="text-2xl font-semibold">₹{product.price}.00</p>
        <p className="text-xs">{`(Incl. all Taxes)`}</p> 
        <hr className="my-1"/>
      </div>
      <div className="flex gap-2">
        <p>{product.originalprice}</p>
        <p>{product.discount}</p>
      </div>
      <div className="grid grid-2">
        <div>
          <div className="w-1/4"></div>
          <div className="w-3/4"></div>
        </div>
        <div>
          <div className="w-1/4"></div>
          <div className="w-3/4"></div>
        </div>
        <div>
          <div className="w-1/4"></div>
          <div className="w-3/4"></div>
        </div>
      </div>
      <div className="bg-neutral-900 rounded-md p-4">
        <h2 className=" font-semibold">Key Features</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
