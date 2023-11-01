import { useRouter } from "next/navigation";
import React from "react";

const Category = ({ url, category }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/cat&${category}`)
  };
  return (
    <>
    <div className="hidden lg:block flex-shrink-0 py-2" onClick={handleClick}>
      <img className="w-28" src={url} alt="" />
    </div>

    {/* MOBILE */}
    <div className="lg:hidden" onClick={handleClick}>
      <img src={url} alt="" />
    </div>
    </>
  );
};

export default Category;
