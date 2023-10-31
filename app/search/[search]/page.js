"use client";
import React, { useEffect, useState } from "react";
import SortFilter from "./components/SortFilter";
import Products from "./components/Products";
import Loading from "@/app/components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/app/store/productSlice";
import { getProfile } from "@/app/store/profileSlice";

const page = ({ params }) => {
  const dispatch = useDispatch();
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
      initialProducts.forEach((p) => {
        if (p.title.toLowerCase().includes(params.search.toLowerCase())) {
          temparr.push(p);
        } else if (p.category.includes(params.search)) temparr.push(p);
      });
      setProducts(temparr);
    }
  }, [initialProducts]);

  if (products == null) {
    return <Loading />;
  }

  return (
    <div className="bg-neutral-800">
      <p className="mx-auto max-w-6xl px-4 pt-2 text-white text-2xl">
        Showing Results for "{params.search}"
      </p>
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
