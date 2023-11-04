"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/app/store/productSlice";
import { getProfile } from "@/app/store/profileSlice";
import { useSearchParams } from "next/navigation";
import SortFilter from "./components/SortFilter";
import Products from "./components/Products";
import Loading from "@/app/components/Loading";
import Navbar from "@/app/components/Navbar";

const page = () => {
  const dispatch = useDispatch();
  const params = useSearchParams();
  const initialProducts = useSelector((state) => state.products.data);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (initialProducts == null) {
      dispatch(getProducts());
      dispatch(getProfile());
    } else {
      const temparr = [];
      initialProducts.forEach((p) => {
        if (params.get("type") == "search") {
          if (p.title.toLowerCase().includes(params.get("query").toLowerCase())) {
            temparr.push(p);
          } else if (p.category.includes(params.get("query"))) temparr.push(p);
        } else {
          if (p.category.includes(params.get("query").toLowerCase())) {
            temparr.push(p);
          }
        }
      });
      setProducts([...temparr]);
    }
  }, [initialProducts,params]);

  if (products == null) {
    return <Loading />;
  }

  return (
    <>
      <Navbar navType={params.get("type")} navVal={params.get("query")} />
      <div className="mx-auto max-w-6xl bg-neutral-900 lg:bg-neutral-800">
        {/* MOBILE */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 py-2 text-lg text-white">
            <p>
              {params.get("type") == "search"
                ? `Showing Results for "${params.get("query")}"`
                : params.get("query")}
            </p>
            <p className="text-xs">{products.length} Products Found</p>
          </div>
          <SortFilter products={products} setProducts={setProducts} />
          <Products products={products} />
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block bg-neutral-800">
          <div className="flex items-center justify-between text-2xl text-white p-4">
            <p>
              {params.get("type") == "search"
                ? `Showing Results for "${params.get("query")}"`
                : params.get("query")}
            </p>
            <p className="text-xs">{products.length} Products Found</p>
          </div>
          <div className="flex px-4 gap-4">
            <div className="w-1/4 bg-neutral-900 rounded-md p-4 h-fit text-white">
              <SortFilter products={products} setProducts={setProducts} />
            </div>
            <div className="w-3/4 bg-neutral-900 rounded-md">
              <Products products={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
