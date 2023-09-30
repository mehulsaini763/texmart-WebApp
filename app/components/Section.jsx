import React from "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
import {v4} from 'uuid';

const Section = (props) => {
  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=9").then(
      (res) => res.json()
    );
    setProducts([...products, response.products.map((p) => p)]);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div className="p-4">loading...</div>;
  }

  return (
    <div className="bg-neutral-900 rounded-md">
      <h1 className="p-4 text-2xl font-semibold text-white">{props.title}</h1>
      <div className="relative flex overflow-hidden justify-stretch">
        <div className="absolute left-0 inset-y-0 my-14">
          <ButtonLeft />
        </div>
        {products[0].map((p) => {
          if (p.category == props.catOne || p.category == props.catTwo) {
            const key = v4();
            return <ProductCard key={key} product={p} />;
          }
        })}
        <div className="absolute right-0 inset-y-0 my-14">
          <ButtonRight />
        </div>
      </div>
    </div>
  );
};

export default Section;
