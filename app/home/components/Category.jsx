import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Category = ({ url, category }) => {
  const router = useRouter();
  const object = {
    type: "category",
    query: category,
  };
 

  return (
    <>
      <div className="hidden lg:block flex-shrink-0 py-2">
        <Link href={{ pathname: "/products", query: object }}>
          <img className="w-28" src={url} alt="" />
        </Link>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden">
        <Link href={{ pathname: "/products", query: object }}>
          <img src={url} alt="" />
        </Link>
      </div>
    </>
  );
};

export default Category;
