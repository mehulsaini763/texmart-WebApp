"use clent";
import React from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

const CartItem = ({ product, getCart }) => {
  
  const editCart = async (operator) => {
    const docRef = doc(db, "users", "mehul");
    const docSnap = await getDoc(docRef);
    const profile = docSnap.data();

    profile.cart.map((p) => {
      if (p.id == product.id) {
        if (operator == "+") {
          p.quantity += 1;
        } else if (p.quantity - 1 != 0) {
          p.quantity -= 1;
        } else return;
      }
    });

    await setDoc(doc(db, "users", "mehul"), { cart: [...profile.cart] });
    getCart();
  };

  return (
    <div className="flex">
      <img className="w-28 object-cover" src={product.thumbnail} alt="" />
      <div className="flex flex-col">
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p className="text-green-500">
          {Math.round(product.discountPercentage)}% Off
        </p>
        <p>SPECS</p>
        <div className="flex gap-2">
          <button onClick={() => editCart("-")}>-</button>
          <p>{product.quantity}</p>
          <button onClick={() => editCart("+")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
