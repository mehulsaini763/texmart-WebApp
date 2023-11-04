"use client";
import React, { useEffect } from "react";
import ProductImages from "./components/ProductImages";
import ProductDetails from "./components/ProductDetails";
import Action from "./components/Action";
import Specification from "./components/Specification";
import Overview from "./components/Overview";
import ProductShowcase from "./components/ProductShowcase";
import Reviews from "./components/Reviews";
import Section from "@/app/home/components/Section";
import Loading from "@/app/components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/app/store/productSlice";
import { getProfile } from "@/app/store/profileSlice";
import Navbar from "@/app/components/Navbar";

const page = ({ params }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    if (products == null) {
      dispatch(getProducts());
      dispatch(getProfile());
    }
  }, []);

  if (useSelector((state) => state.products.data) == null) return <Loading />;

  return (
    <>
      <Navbar />
      {/* MOBILE */}
      {products.map(
        (product) =>
          product.id == params.id && (
            <div
              className="lg:hidden py-4 px-2 bg-neutral-800"
              key={product.id}
            >
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col gap-4">
                  <ProductImages images={product.images} />
                  <Action product={product} />
                  <ProductDetails product={product} />
                </div>
                <div className="space-y-2 my-2">
                  <Specification specification={product.specifications} />
                  <Overview overview={product.overview} />
                  <ProductShowcase />
                  <Reviews />
                  <div className="rounded-md overflow-clip">
                    <Section title="Similar Product" catOne="smartphones" />
                  </div>
                  <div className="p-4"></div>
                </div>
              </div>
            </div>
          )
      )}

      {/* DESKTOP */}
      {products.map(
        (product) =>
          product.id == params.id && (
            <div
              className="hidden lg:block py-4 px-2 bg-neutral-800"
              key={product.id}
            >
              <div className="max-w-6xl mx-auto">
                <div className="flex gap-4">
                  <div className="bg-neutral-900 w-1/2 grid grid-cols-1 place-content-center rounded-md">
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
                  <div className="rounded-md overflow-clip">
                    <Section title="Similar Product" catOne="smartphones" />
                  </div>
                  <div className="p-4"></div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default page;
