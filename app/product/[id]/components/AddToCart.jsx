"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

const AddToCart = (props) => {
  const router = useRouter();

  const handleCart = async () => {
    const docRef = doc(db, "users", "mehul");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      window.alert("CREATE ACCOUNT TO ACCESS CART");
    } else {
      const profile = docSnap.data();
      let cart = profile.cart;

      if (checkExisting(cart)) {
        await setDoc(doc(db, "users", "mehul"), {
          cart,
        });
      } else {
        await setDoc(doc(db, "users", "mehul"), {
          cart: [...cart, { ...props.product, quantity: 1 }],
        });
      }

      router.push(`/viewcart/user/mehul`);
    }
  };

  const checkExisting = (cart) => {
    cart.map((p) => {
      if (p.id == props.product.id) {
        p.quantity + 1;
        return true;
      }
    });
    return false;
  };

  return (
    <button className="p-4 bg-yellow-400" onClick={handleCart}>
      add to cart
    </button>
  );
};

export default AddToCart;
