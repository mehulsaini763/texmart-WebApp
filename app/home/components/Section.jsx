import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (products != null) {
      if (props.random) {
        const tempArr = [...products];
        for (let i = tempArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
        }
        setProducts(tempArr);
      } else {
        const tempArr = [];
        products.map((p) => {
          if (
            p.category.includes(props.catOne) ||
            p.category.includes(props.catTwo)
          ) {
            tempArr.push(p);
          }
        });
        setProducts(tempArr);
      }
    }
  }, []);

  return (
    <div className="bg-neutral-900 lg:rounded-md p-2  space-y-2 lg:relative lg:p-4 lg:space-y-4">
      <h1 className="text-lg font-semibold px-2 text-white lg:text-2xl">
        {props.title}
      </h1>

      <div className="lg:hidden flex overflow-x-scroll gap-2">
        {products.map((p, i) => {
          if (i > 8) return;
          return <ProductCard key={p.title} product={p} />;
        })}
      </div>
      <div className="hidden lg:block overflow-hidden px-2">
        <div
          className="flex m-2 gap-4 transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 40}%)` }}
        >
          {products.map((p, i) => {
            if (i > 8) return;
            return <ProductCard key={p.title} product={p} />;
          })}
        </div>
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
