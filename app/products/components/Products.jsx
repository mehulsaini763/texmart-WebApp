import React from "react";
import AssuredLogo from "@/public/texmartAssured.png";
import { useRouter } from "next/navigation";

const Products = ({ products }) => {
  const router = useRouter();
  const goToProduct = (id) => {
    router.push(`/viewproduct/${id}`);
  };

  if (products.length == 0) {
    return (
      <div className="p-8 text-white text-xl overflow-hidden">
        <p>No Products Available</p>
      </div>
    );
  }

  return (
    <>
      {products.map((p) => (
        <div key={p.id}>
          {/* MOBILE */}
          <div className="flex lg:hidden text-white p-4 gap-2">
            <div className="w-1/3 p-2">
              <img
                className="object-contain"
                src={p.thumbnail}
                onClick={() => goToProduct(p.id)}
              />
            </div>
            <div className="w-2/3">
              <p
                className="text-base line-clamp-3"
                onClick={() => goToProduct(p.id)}
              >
                {p.title}
              </p>
              <div className="flex gap-2 items-center">
              <p className="text-lg font-semibold">₹{p.price}</p>
              <p className="text-xs">{p.discount}% off</p>
              </div>
              <p className="text-xs line-through text-neutral-500">
                MRP:₹{p.price}
              </p>
              <div className="w-full my-1">
                <img
                  className="w-14 object-contain"
                  src={AssuredLogo.src}
                  alt="Assured"
                />
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div
            className="hidden lg:flex text-white m-8 gap-2 hover:cursor-pointer"
            onClick={() => goToProduct(p.id)}
          >
            <div className="w-2/6">
              <img className="object-contain" src={p.thumbnail} />
            </div>
            <div
              className="w-3/6 hover:cursor-pointer"
              onClick={() => goToProduct(p.id)}
            >
              <p className="text-xl line-clamp-2 hover:text-yellow-300">
                {p.title}
              </p>
              <ul className="list-disc p-4">
                {p.keyfeatures.map((kf, i) => {
                  if (i < 5) {
                    return (
                      <li key={kf} className="text-base">
                        {kf}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div
              className="w-1/6 flex flex-col gap-2 text-right hover:cursor-pointer"
              onClick={() => goToProduct(p.id)}
            >
              <p className="text-2xl">₹{p.price}</p>
              <p className="text-sm line-through text-neutral-500">
                MRP:₹{p.price}
              </p>
              <p className="text-sm">{p.discount}% off</p>
              <div className="flex flex-row-reverse w-full">
                <img
                  className="w-16 object-contain"
                  src={AssuredLogo.src}
                  alt="Assured"
                />
              </div>
            </div>
          </div>
          <hr className="m-2 lg:m-8 border-neutral-500 " />
        </div>
      ))}
    </>
  );
};

export default Products;
