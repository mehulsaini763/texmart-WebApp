"use clent";
import React from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase";
import AssuredLogo from "../../../../../public/texmartAssured.png";
import useScreenSize from "@/app/customHook/useScreenSize";

const CartItem = ({ product, getCart }) => {
  const screenSize = useScreenSize();
  const editCart = async (operator) => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    const Profile = docSnap.data();

    Profile.cart.map((p, i) => {
      if (p.id == product.id) {
        if (operator == "+") {
          p.quantity += 1;
        } else if (p.quantity - 1 != 0) {
          p.quantity -= 1;
        } else if (operator == "remove") {
          Profile.cart.splice(i, 1);
          return;
        } else return;
      }
    });

    await setDoc(doc(db, "users", auth.currentUser.uid), {
      ...Profile,
      cart: [...Profile.cart],
    });
    getCart();
  };

  if (screenSize.width >= 1024) {
    return (
      <div>
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
              <div>+</div>
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
    );
  } else {
    return (
      <div>
        <div className="flex my-2">
          <img className="w-28 object-cover" src={product.thumbnail} alt="" />
          <div className="flex flex-col gap-1 mx-2">
            <p className="text-sm">{product.title}</p>
            <p className="text-lg font-bold">₹{product.price}</p>
            <p className="text-green-500">
              {Math.round(product.discount)}% Off
            </p>
            <img
              className="w-12 object-contain"
              src={AssuredLogo.src}
              alt="assured"
            />
          </div>
        </div>
        <div className="flex justify-between my-4 mx-2">
          <div className="flex gap-2 ">
            <button
              className="rounded-full border-neutral-500 bg-neutral-800 h-6 w-6 flex items-center justify-center"
              onClick={() => editCart("-")}
            >
              <div>-</div>
            </button>
            <div className="border-2 border-neutral-800 text-center flex items-center px-6">
              <p>{product.quantity}</p>
            </div>
            <button
              className="rounded-full border-neutral-500 bg-neutral-800 h-6 w-6 flex items-center justify-center"
              onClick={() => editCart("+")}
            >
              <div>+</div>
            </button>
          </div>
          <button className="text-sm" onClick={() => editCart("remove")}>
            REMOVE
          </button>
        </div>
      </div>
    );
  }
};

export default CartItem;
