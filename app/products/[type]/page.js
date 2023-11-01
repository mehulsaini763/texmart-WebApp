"use client";
import React, { useEffect, useState } from "react";
import SortFilter from "./components/SortFilter";
import Products from "./components/Products";
import Loading from "@/app/components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/app/store/productSlice";
import { getProfile } from "@/app/store/profileSlice";
import { split } from "postcss/lib/list";

const page = ({ params }) => {
  const dispatch = useDispatch();
  const parameters = split(params.type, "%26");
  const initialProducts = useSelector((state) => state.products.data);

  useEffect(() => {
    if (initialProducts == null) {
      dispatch(getProducts());
      dispatch(getProfile());
      console.log("DATA FETCHED");
    }
  }, []);

  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (initialProducts != null) {
      const temparr = [];
      console.log(parameters);
      initialProducts.forEach((p) => {
        if (parameters[0] == "s") {
          if (p.title.toLowerCase().includes(parameters[1].toLowerCase())) {
            temparr.push(p);
          } else if (p.category.includes(parameters[1])) temparr.push(p);
        } else {
          if (
            p.category.includes(parameters[1]) ||
            p.category.includes(parameters[2])
          ) {
            temparr.push(p);
          }
        }
      });
      setProducts(temparr);
    }
  }, [initialProducts]);

  const [showSortFilter, setShowSortFilter] = useState(false);

  if (products == null) {
    return <Loading />;
  }

  return (
    <div className="mx-auto max-w-6xl bg-neutral-900 h-full lg:bg-neutral-800">
      {/* MOBILE */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-2 text-lg text-white">
          <p>
            {parameters.length[0] == "s"
              ? `Showing Results for "${parameters[1]}"`
              : parameters.length == 2
              ? parameters[1]
              : `${parameters[1]} & ${parameters[2]}`}
          </p>
          <p className="text-xs">{products.length} Products Found</p>
        </div>
        {showSortFilter ? (
          <div className="fixed inset-0 h-full bg-neutral-900 rounded-md text-white p-2">
            <SortFilter products={products} setShowSortFilter={setShowSortFilter} setProducts={setProducts} />
          </div>
        ) : (
          <div>
            <button
              className="fixed bottom-0 inset-x-0 bg-neutral-800 text-center text-lg font-semibold text-white py-4"
              onClick={() => setShowSortFilter(true)}
            >
              Sort & Filter
            </button>
          </div>
        )}
        <Products products={products} />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block bg-neutral-800">
        <div className="flex items-center justify-between text-2xl text-white p-4">
          <p>
            {parameters.length[0] == "s"
              ? `Showing Results for "${parameters[1]}"`
              : parameters.length == 2
              ? parameters[1]
              : `${parameters[1]} & ${parameters[2]}`}
          </p>
          <p className="text-xs">{products.length} Products Found</p>
        </div>
        <div className="flex p-4 gap-4">
          <div className="w-1/4 bg-neutral-900 rounded-md p-4 h-fit text-white">
            <SortFilter products={products} setProducts={setProducts} />
          </div>
          <div className="w-3/4 bg-neutral-900 rounded-md">
            <Products products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
