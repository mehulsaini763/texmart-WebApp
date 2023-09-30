"use client";
import React, { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import Subtotal from "./components/Subtotal";

const page = (params) => {
  useEffect(() => {
    getCart();
  }, []);

  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCart = async () => {
    const docRef = doc(db, "users", "mehul");
    const docSnap = await getDoc(docRef);
    
    if(!docSnap.exists()){
        windows.alert("CREATE ACCOUNT");
    }else{
        const profile = docSnap.data();
        setCart(profile.cart);
        setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex">
      <div className="w-2/3">
        <div>Address</div>
        <div>
            {cart.length==0?<p>CART IS EMPTY</p>:cart.map((p)=><CartItem product={p} getCart={getCart}/>)}
        </div>
      </div>
      <div className="w-1/3">
        <Subtotal cart={cart} />
      </div>
    </div>
  );
};

export default page;
