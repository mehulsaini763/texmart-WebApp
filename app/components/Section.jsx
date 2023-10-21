import React from "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
import { v4 } from "uuid";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import useScreenSize from "../customHook/useScreenSize";

const Section = (props) => {
  useEffect(() => {
    getProducts();
  }, [auth]);

  const screenSize = useScreenSize();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    if (!querySnapshot.empty) {
      const temparr = [];
      querySnapshot.forEach((doc) => {
        temparr.push(doc.data());
      });
      setProducts(temparr);
    }
    setIsLoading(false);
  };

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr(curr == 0 ? 0 : curr - 1);
  };

  const next = () => {
    setCurr(curr == 2 ? 0 : curr + 1);
  };

  if (isLoading) {
    return (
      <div className="bg-neutral-900 rounded-md">
        <h1 className="p-4 text-2xl font-semibold text-white">{props.title}</h1>
        <div className="relative flex overflow-hidden justify-stretch">
          <div className="absolute left-0 inset-y-0 my-14">
            <button onClick={prev}>
              <ButtonLeft />
            </button>
          </div>
          <div className="w-56 bg-neutral-950 h-72 m-2"></div>
          <div className="absolute right-0 inset-y-0 my-14">
            <button onClick={next}>
              <ButtonRight />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screenSize.width >= 1024) {
    return (
      <div className="relative bg-neutral-900 rounded-md p-4 space-y-4">
        <h1 className="text-2xl font-semibold text-white">{props.title}</h1>
        <div className="overflow-hidden">
          <div
            className="flex justify-stretch gap-4 transition-transform ease-out duration-300"
            style={{ transform: `translateX(-${curr * 48.55}%)` }}
          >
            {products.map((p) => {
              if (
                p.category.includes(props.catOne) ||
                p.category[0] == props.catTwo
              ) {
                return <ProductCard key={p.title} product={p} />;
              }
            })}
          </div>
        </div>
        <div className="absolute z-20 left-0 inset-y-0 flex items-center justify-between ">
          <button className="h-28" onClick={prev}>
            <ButtonLeft />
          </button>
        </div>
        <div className="absolute z-20 right-0 inset-y-0 flex items-center justify-between">
          <button className="h-28" onClick={next}>
            <ButtonRight />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-neutral-900 rounded-md p-2 space-y-2">
        <h1 className="text-lg font-semibold text-white">{props.title}</h1>
        <div className="flex gap-2 overflow-x-scroll">
          {products.map((p) => {
            if (
              p.category.includes(props.catOne) ||
              p.category[0] == props.catTwo
            ) {
              return <ProductCard key={p.title} product={p} />;
            }
          })}
        </div>
      </div>
    );
  }
};

export default Section;
