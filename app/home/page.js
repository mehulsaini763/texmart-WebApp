"use client";
import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Grid from "./components/Grid";
import Section from "./components/Section";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/app/store/productSlice";
import { getProfile } from "@/app/store/profileSlice";
import Loading from "../components/Loading";

const page = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  
  useEffect(() => {
    if (products == null) {
      dispatch(getProducts());
      dispatch(getProfile());
      console.log("DATA FETCHED");
    }
  }, []);

  if (useSelector((state) => state.products.data) == null) return <Loading />;

  return (
      <main className="flex flex-col lg:mx-auto lg:max-w-6xl lg:gap-4 lg:p-4">
        {/* MOBILE */}
        <div className="lg:hidden">
          <Banner />
          <Categories />
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex flex-col gap-4">
          <Categories />
          <Banner />
        </div>

        <Section
          title="Deals of the Day"
          catOne="smartphones"
          catTwo="laptops"
        />
        <Grid title="New at Texmart" />
        <Section
          title="Top Trending Deals"
          catOne="smartphones"
          catTwo="laptops"
        />
        <Section title="Festive Deals" catOne="smartphones" catTwo="laptops" />
        <Section
          title="Deals on Accessories"
          catOne="smartphones"
          catTwo="laptops"
        />
        <Section title="Deals on Audio" catOne="smartphones" catTwo="laptops" />
        <Section
          title="Kitchen Aplliances"
          catOne="smartphones"
          catTwo="laptops"
        />
      </main>
  );
};

export default page;
