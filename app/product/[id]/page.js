"use client";
import React, { useEffect, useState } from "react";
import ProductImages from "./components/ProductImages";
import ProductDetails from "./components/ProductDetails";
import Action from "./components/Action";
import Specification from "./components/Specification";
import Overview from "./components/Overview";
import ProductShowcase from "./components/ProductShowcase";
import Reviews from "./components/Reviews";
import Section from "@/app/components/Section";
import { auth, db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import useScreenSize from "@/app/customHook/useScreenSize";

const page = ({ params }) => {
  useEffect(() => {
    getProduct();
  }, [auth]);

  const screenSize = useScreenSize();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async () => {
    const docSnap = await getDoc(doc(db, "products", params.id));
    setProduct(docSnap.data());
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="absolute inset-0 bg-neutral-800 grid place-content-center">
        <h1 className="text-white text-6xl">Loading...</h1>
      </div>
    );
  }
  if (screenSize.width >= 1024) {
    return (
      <div className="py-4 bg-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="w-1/2">
              <ProductImages images={product.images} />
              <Action product={product} />
            </div>
            <div className="w-1/2">
              <ProductDetails product={product} />
            </div>
          </div>
          <div className="space-y-4 my-4">
            <Specification specification={product.specifications} />
            <Overview overview={product.overview} />
            <ProductShowcase />
            <Reviews />
            <Section title="Similar Product" catOne="smartphones" />
            <div className="p-4"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-2 bg-neutral-800 ">
        <ProductImages images={product.images} />
        <Action product={product} />
        <div className="space-y-2">
          <ProductDetails product={product} />
          <Specification specification={product.specifications} />
          <Overview overview={product.overview} />
          <ProductShowcase />
          <Reviews />
          <Section title="Similar Product" catOne={product.category[0]} />
        </div>
        <div className="p-4"></div>
      </div>
    );
  }
};

export default page;
