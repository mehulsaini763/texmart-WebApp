import React from "react";
import AssuredLogo from "../../../../../public/texmartAssured.png";
import { useDispatch } from "react-redux";
import { getProfile, updateProfile } from "@/app/store/profileSlice";

const CartItem = ({ index, profile, product }) => {
  const dispatch = useDispatch();

  const editCart = (operator) => {
    if (operator == "+") {
      const newProd = { ...product, quantity: product.quantity + 1 };
      const newProf = {
        ...profile,
        cart: [...profile.cart.map((p, i) => (i == index ? newProd : p))],
      };
      dispatch(updateProfile(newProf));
      dispatch(getProfile());
    } else if (product.quantity - 1 != 0) {
      const newProd = { ...product, quantity: product.quantity - 1 };
      const newProf = {
        ...profile,
        cart: [...profile.cart.map((p, i) => (i == index ? newProd : p))],
      };
      dispatch(updateProfile(newProf));
      dispatch(getProfile());
    } else if (operator == "remove") {
      const newProf = {
        ...profile,
        cart: [...profile.cart.filter((p, i) => i != index)],
      };
      dispatch(updateProfile(newProf));
      dispatch(getProfile());
    } else return;
  };

  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden">
        <div className="flex my-2">
          <img
            className="w-1/2 p-4 object-contain"
            src={product.thumbnail}
            alt=""
          />
          <div className="w-1/2 flex flex-col gap-1 mx-2">
            <p className="text-base line-clamp-2">{product.title}</p>
            <p className="text-sm font-bold">₹{product.price}</p>
            <p className="text-xs">{"(Incl. all Taxes)"}</p>
            <p className="text-sm text-green-500">
              {Math.round(product.discount)}% Off
            </p>
            <button
              className="text-xs border rounded-md p-2 my-1"
              onClick={() => editCart("remove")}
            >
              REMOVE
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="flex my-2">
          <img className="w-36 object-cover" src={product.thumbnail} alt="" />
          <div className="flex flex-col gap-2 mx-2">
            <p className="text-lg">{product.title}</p>
            <p className="text-xl font-bold">₹{product.price}</p>
            <p className="text-green-500">
              {Math.round(product.discount)}% Off
            </p>
            <img
              className="w-16 object-contain"
              src={AssuredLogo.src}
              alt="assured"
            />
          </div>
        </div>
        <div className="flex justify-between m-4">
          <div className="flex gap-2 ">
            <button
              className="rounded-full border-neutral-500 bg-neutral-800 h-8 w-8 flex items-center justify-center"
              onClick={() => editCart("-")}
            >
              <div>-</div>
            </button>
            <div className="border-2 border-neutral-800 text-center flex items-center px-8">
              <p>{product.quantity}</p>
            </div>
            <button
              className="rounded-full border-neutral-500 bg-neutral-800 h-8 w-8 flex items-center justify-center"
              onClick={() => editCart("+")}
            >
              <div>+</div>
            </button>
          </div>
          <button onClick={() => editCart("remove")}>REMOVE</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
