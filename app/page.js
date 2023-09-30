'use client'
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className="p-4 bg-neutral-800 flex flex-col gap-4">
      <Categories />
      <Banner />
      <Section title="Deals of the Day" catOne="smartphones" catTwo="laptops" />
    </main>
  );
}
