import HeartIconOutline from "@heroicons/react/24/outline/HeartIcon";
import HeartIconSolid from "@heroicons/react/24/solid/HeartIcon";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";

const AddToWishlist = ({ product }) => {
  useEffect(() => {
    auth.currentUser != null && getWishlist();
  }, [auth]);

  const [profile, setProfile] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const getWishlist = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    const tempProfile = docSnap.data();
    setProfile(tempProfile);
    setWishlist([...tempProfile.wishlist]);
  };

  const remove = async () => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      ...profile,
      wishlist: [...wishlist.filter((wp) => product.id != wp.id)],
    });
    getWishlist();
  };
  const add = async () => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      ...profile,
      wishlist: [...wishlist, product],
    });
    getWishlist();
  };
  return (
    <div className="absolute right-0 top-0 hover:cursor-default">
      {wishlist.find((wp) => product.id == wp.id) ? (
        <HeartIconSolid
          className="h-6 w-6 text-pink-600"
          onClick={() =>
            auth.currentUser != null
              ? remove
              : alert("Login to add to wishlist")
          }
        />
      ) : (
        <HeartIconOutline
          className="h-6 w-6 text-neutral-500"
          onClick={() =>
            auth.currentUser != null ? add : alert("Login to add to wishlist")
          }
        />
      )}
    </div>
  );
};

export default AddToWishlist;
