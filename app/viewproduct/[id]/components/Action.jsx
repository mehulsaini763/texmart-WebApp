import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase";
import FullLogin from "@/app/components/FullLogin";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/app/store/profileSlice";

const Action = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const profile = useSelector((state) => state.profile.data);

  useEffect(()=>{
    if(profile==null){
      dispatch(getProfile())
    }
  },[])
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
      <div className="flex fixed bottom-0 inset-x-0 bg-neutral-900 lg:p-2 items-center justify-around shadow-[60px_60px_60px_0px_rgba(255,255,255,1)] z-50">
        <div className="hidden lg:flex gap-4">
          <img className="w-16" src={product.thumbnail} />
          <div className="text-white">
            <p className="font-semibold">{product.title}</p>
            <p className="font-semibold">${product.price}</p>
          </div>
        </div>
        <div className="lg:gap-4 flex w-full lg:w-fit">
          <button
            className="w-full py-4 lg:w-fit lg:py-2 px-8 lg:rounded-md bg-yellow-400 font-bold"
            onClick={handleCart}
          >
            Buy Now
          </button>
          <button
            className="w-full py-4 lg:w-fit lg:py-2 px-8 lg:rounded-md bg-neutral-800 lg:border text-white"
            onClick={handleCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
};

export default Action;
