import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase";
import FullLogin from "@/app/home/components/FullLogin";

const Action = ({ product }) => {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);

  const handleCart = async () => {
    if (auth.currentUser != null) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      const profile = docSnap.data();
      let cart = profile.cart;
      if (!cart.find((p) => p.id == product.id)) {
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          ...profile,
          cart: [...cart, product],
        });
      }

      router.push(`/viewcart/user/${auth.currentUser.uid}`);
    } else setShowLogin(true);
  };

    return (
      <>
        {showLogin && <FullLogin setShowLogin={setShowLogin} />}
        <div className="flex fixed bottom-0 inset-x-0 bg-neutral-900 p-2 items-center justify-around shadow-[60px_60px_60px_0px_rgba(255,255,255,1)] z-50">
          <div className="flex gap-4">
            <img className="w-16" src={product.thumbnail} />
            <div className="text-white">
              <p className="font-semibold">{product.title}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
          </div>
          <div className="gap-4 flex">
            <button
              className="py-2 px-8 rounded-md bg-yellow-400 font-bold"
              onClick={handleCart}
            >
              Buy Now
            </button>
            <button
              className="py-2 px-8 rounded-md bg-neutral-800 border text-white"
              onClick={handleCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </>
    );

      <>
        {showLogin && <FullLogin setShowLogin={setShowLogin} />}
        <div className="flex fixed bottom-0 inset-x-0 z-50">
            <button
              className="py-2 w-full bg-yellow-400 font-bold"
              onClick={handleCart}
            >
              Buy Now
            </button>
            <button
              className="py-4 w-full bg-neutral-950 text-white font-bold"
              onClick={handleCart}
            >
              Add to Cart
            </button>
        </div>
      </>

};

export default Action;
