import React from "react";
import AssuredLogo from "../../../../public/texmartAssured.png";
import { useRouter } from "next/navigation";

const Products = ({ products }) => {
  const router = useRouter();
  const goToProduct = (id) => {
    router.push(`/product/${id}`);
  };

  if (products.length == 0) {
    return (
      <div className="p-8 text-white text-xl overflow-hidden">
        {/* <img src={NoProduct.src} className="object-contain w-full" /> */}
        <p>No Products Available</p>
      </div>
    );
  }

  return (
    <>
      {products.map((p) => (
        <div key={p.id}>
          <div
            className="flex text-white m-8 gap-2 hover:cursor-pointer"
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
          <hr className="m-8 border-neutral-500 " />
        </div>
      ))}
    </>
  );
};

export default Products;
