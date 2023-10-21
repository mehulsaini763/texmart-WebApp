"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import SortFilter from "./components/SortFilter";
import Products from "./components/Products";
import useScreenSize from "@/app/customHook/useScreenSize";

const page = ({ params }) => {
  useEffect(() => {
    getProducts();
  }, []);

  const screenSize = useScreenSize();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const category = params.category.split("%26");

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    if (!querySnapshot.empty) {
      const temparr = [];
      if (category.length == 2) {
        querySnapshot.forEach((doc) => {
          if (doc.data().category.includes(category[0])) {
            temparr.push(doc.data());
          }
          if (doc.data().category.includes(category[1])) {
            temparr.push(doc.data());
          }
        });
      } else {
        querySnapshot.forEach((doc) => {
          if (doc.data().category.includes(category[0])) {
            temparr.push(doc.data());
          }
        });
      }
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
      <div className="p-2 lg:p-8 text-white text-xl overflow-hidden">
        {/* <img src={NoProduct.src} className="object-contain w-full" /> */}
        <p>No Products Available</p>
      </div>
    );
  }

  if (screenSize.width >= 1024) {
    return (
      <div className="bg-neutral-800">
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
  } else {
    return (
      <>
        <div className="bg-neutral-900">
          <SortFilter products={products} setProducts={setProducts} />
          <Products products={products} />
        </div>
      </>
    );
  }
};

export default page;
