import HeartIconOutline from "@heroicons/react/24/outline/HeartIcon";
import HeartIconSolid from "@heroicons/react/24/solid/HeartIcon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "@/app/store/profileSlice";

const AddToWishlist = ({ product }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);

  const remove = async () => {
    const newWish = [...profile.wishlist.filter((p) => product.id != p.id)];
    const newProf = { ...profile, wishlist: newWish };
    dispatch(updateProfile(newProf));
    dispatch(getProfile());
  };

  const add = async () => {
    const newWish = [...profile.wishlist, product];
    const newProf = { ...profile, wishlist: newWish };
    dispatch(updateProfile(newProf));
    dispatch(getProfile());
  };

  if (profile == null) {
    return (
      <div className="absolute right-0 top-0 hover:cursor-default m-2 lg:p-2">
        <button onClick={() => alert("Login to add to wishlist")}>
          <HeartIconOutline className="h-4 w-4 lg:h-6 lg:w-6 text-neutral-500" />
        </button>
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-0 hover:cursor-default m-2 lg:p-2">
      {profile.wishlist.find((wp) => product.id == wp.id) ? (
        <button onClick={remove}>
          <HeartIconSolid className="h-4 w-4 lg:h-6 lg:w-6 text-pink-600" />
        </button>
      ) : (
        <button onClick={add}>
          <HeartIconOutline className="h-4 w-4 lg:h-6 lg:w-6 text-neutral-500" />
        </button>
      )}
    </div>
  );
};

export default AddToWishlist;
