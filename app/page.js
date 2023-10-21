"use client";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Grid from "./components/Grid";
import Section from "./components/Section";
import useScreenSize from "./customHook/useScreenSize";

export default function Home() {
  const screenSize = useScreenSize();
  if (screenSize.width >= 1024) {
    return (
      <main className="mx-auto max-w-6xl flex flex-col gap-4 p-4">
        <Categories />
        <Banner />
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
  } else {
    return (
      <main className="flex flex-col">
        <Banner />
        <Categories />
        <div className="m-2 space-y-2">
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
          <Section
            title="Festive Deals"
            catOne="smartphones"
            catTwo="laptops"
          />
          <Section
            title="Deals on Accessories"
            catOne="smartphones"
            catTwo="laptops"
          />
          <Section
            title="Deals on Audio"
            catOne="smartphones"
            catTwo="laptops"
          />
          <Section
            title="Kitchen Aplliances"
            catOne="smartphones"
            catTwo="laptops"
          />
        </div>
      </main>
    );
  }
}
