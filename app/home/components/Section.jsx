import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
import { useSelector } from "react-redux";

const Section = (props) => {
  const [products, setProducts] = useState(
    useSelector((state) => state.products.data)
  );
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr(curr == 0 ? 0 : curr - 1);
  };
  const next = () => {
    setCurr(curr == 2 ? 0 : curr + 1);
  };

  return (
    <div className="bg-neutral-900 lg:rounded-md p-2 space-y-2 lg:relative lg:p-4 lg:space-y-4">
      <h1 className="text-lg font-semibold px-2 text-white lg:text-2xl">
        {props.title}
      </h1>
      <div className="flex overflow-x-scroll gap-2 lg:gap-4">
        {products.map((p) => {
          if (
            p.category.includes(props.catOne) ||
            p.category[0] == props.catTwo
          ) {
            return <ProductCard key={p.title} product={p} />;
          }
        })}
      </div>
      <div className="hidden absolute z-20 left-0 inset-y-0 lg:flex items-center justify-between ">
        <button className="h-28" onClick={prev}>
          <ButtonLeft />
        </button>
      </div>
      <div className="hidden absolute z-20 right-0 inset-y-0 lg:flex items-center justify-between">
        <button className="h-28" onClick={next}>
          <ButtonRight />
        </button>
      </div>
    </div>
  );
};

export default Section;
