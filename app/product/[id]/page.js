'use client'
import React, {useEffect, useState} from "react";
import ProductImages from "./components/ProductImages";
import ProductDetails from "./components/ProductDetails";
import AddToCart from "./components/AddToCart";
import BuyButton from "./components/BuyButton";

const page = ({ params }) => {
  useEffect(()=>{
    getProduct();
  },[]);

  const [product,setProduct] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  
  const getProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`)
    .then(res => res.json());
    setProduct(response);
    setIsLoading(false);
  }
  
  if(isLoading){
    return (
      <div className="absolute inset-0 bg-neutral-800 grid place-content-center">
        <h1 className="text-white text-6xl">Loading...</h1>
      </div>
    )
  }

  return (
    <div className="p-4 bg-neutral-800">
      <div className="flex gap-4">
        <div className="w-2/5">
          <ProductImages images={product.images} />
          <div className="flex">
            <AddToCart product={product} />
            <BuyButton product={product} />
          </div>
        </div>
        <div className="w-3/5">
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
};

export default page;
