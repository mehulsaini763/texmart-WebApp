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
import Navbar from "@/app/components/Navbar";

const page = () => {
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

        <Section title="Deals of the Day" random={true} />
        <Grid title="New at Texmart" />
        <Section title="Top Trending Deals" random={true} />
        {/* <Section title="Festive Deals" catOne="smartphones" catTwo="laptops" /> */}
        <Section title="Deals on Smartphones" catOne="smartphones" catTwo="" />
        <Section title="Deals on Audio" catOne="headphones" catTwo="speakers" />
        <Section title="Best of Wearables" catOne="wearables" catTwo="" />
      </main>
    </>
  );
};

export default page;
