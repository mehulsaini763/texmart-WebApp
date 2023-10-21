"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import SortFilter from "./components/SortFilter";
import Products from "./components/Products";

const page = ({ params }) => {
  useEffect(() => {
    getProducts();
  }, [params.search]);


  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    if (!querySnapshot.empty) {
      const temparr = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().title.toLowerCase().includes(params.search.toLowerCase())) {
          temparr.push(doc.data());
        } else if (doc.data().category.includes(params.search))
          temparr.push(doc.data());
      });
      setProducts(temparr);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="absolute inset-0 bg-neutral-900 text-white h-full">
        <div className="grid place-content-center">
          <div>LOADING...</div>
        </div>
      </div>
    );
  }

  if (products.length == 0) {
    return (
      <div className="p-8 text-white text-xl overflow-hidden">
        {/* <img src={NoProduct.src} className="object-contain w-full" /> */}
        <p>No Products Available</p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-800">
      <p className="mx-auto max-w-6xl px-4 pt-2 text-white text-2xl">Showing Results for "{params.search}"</p>
      <div className="flex mx-auto max-w-6xl p-4 gap-4">
        <div className="w-1/4 bg-neutral-900 rounded-md p-4 h-fit text-white">
          <SortFilter products={products} setProducts={setProducts} />
        </div>
        <div className="w-3/4 bg-neutral-900 rounded-md">
          <Products products={products} />
        </div>
      </div>
    </div>
  );
};

export default page;
