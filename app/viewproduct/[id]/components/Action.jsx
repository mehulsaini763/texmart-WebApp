import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FullLogin from "@/app/components/FullLogin";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "@/app/store/profileSlice";
import { auth } from "@/app/firebase";

const Action = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const profile = useSelector((state) => state.profile.data);

  useEffect(() => {
    if (profile == null) {
      dispatch(getProfile());
    }
  }, []);

  const handleCart = async () => {
    if (profile != null) {
      if (!profile.cart.find((p) => p.id == product.id)) {
        const newCart = [...profile.cart, product];
        const newProf = { ...profile, cart: newCart };
        dispatch(updateProfile(newProf));
      }

      router.push(`/viewcart/user/${auth.currentUser.uid}`);
    } else setShowLogin(true);
  };

  return (
    <>
      {showLogin && <FullLogin setShowLogin={setShowLogin} />}

      {/* MOBILE */}
      <div className="lg:hidden flex fixed bottom-0 inset-x-0 bg-neutral-900 lg:p-2 items-center justify-around shadow-[60px_60px_60px_0px_rgba(255,255,255,1)] z-20">
        <div className="flex w-full">
          <button
            className="w-full py-4 px-8 bg-yellow-400 font-bold"
            onClick={handleCart}
          >
            Buy Now
          </button>
          <button
            className="w-full py-4 px-8 bg-neutral-800 text-white"
            onClick={handleCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block fixed bottom-0 inset-x-0 bg-neutral-900 p-2  shadow-[60px_60px_60px_0px_rgba(255,255,255,1)] z-50">
        <div className="flex max-w-4xl mx-auto items-center justify-around gap-16">
          <div className="flex gap-4">
            <img className="w-16" src={product.thumbnail} />
            <div className="text-white">
              <p className="font-semibold line-clamp-2">{product.title}</p>
              <p className="font-semibold">₹{product.price}</p>
            </div>
          </div>
          <div className="gap-4 shrink-0 flex w-max">
            <button
              className="py-2 px-8 rounded-md bg-yellow-400 font-bold "
              onClick={handleCart}
            >
              Buy Now
            </button>
            <button
              className="lg:w-fitpy-2 px-8 rounded-md bg-neutral-800 border text-white "
              onClick={handleCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Action;
